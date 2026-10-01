const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dir = path.join(root, "data", "lectures");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".json")).sort();

const errors = [];
const expectedChecks = ["timeChange", "jsonRecovery", "schemaRecovery"];

for (const file of files) {
    const full = path.join(dir, file);
    let d;
    try {
        d = JSON.parse(fs.readFileSync(full, "utf8"));
    } catch (e) {
        errors.push(`${file}: JSON syntax error -> ${e.message}`);
        continue;
    }

    if (typeof d.day !== "string" || !d.day) errors.push(`${file}: day must be a non-empty string`);
    if (!/^Student [1-7]$/.test(String(d.owner || ""))) errors.push(`${file}: owner must be Student 1..7`);
    if (typeof d.status !== "string" || !d.status) errors.push(`${file}: status must be a non-empty string`);

    if (!Array.isArray(d.lectures) || d.lectures.length !== 3) {
        errors.push(`${file}: lectures must contain exactly 3 items`);
    } else {
        d.lectures.forEach((l, i) => {
            if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(String(l.time || ""))) {
                errors.push(`${file}: lectures[${i}].time must be HH:MM`);
            }
            if (!Number.isInteger(l.roomNumber)) {
                errors.push(`${file}: lectures[${i}].roomNumber must be an integer`);
            }
            if (typeof l.titleLecture !== "string" || !l.titleLecture.trim()) {
                errors.push(`${file}: lectures[${i}].title must be a non-empty string`);
            }
        });
    }

    if (!d.labStatus || typeof d.labStatus !== "object") {
        errors.push(`${file}: labStatus is required`);
    } else {
        for (const key of expectedChecks) {
            const check = d.labStatus[key];
            if (!check) errors.push(`${file}: labStatus.${key} is required`);
            else {
                if (!["pending", "fixed"].includes(check.status)) {
                    errors.push(`${file}: labStatus.${key}.status must be pending or fixed`);
                }
                if (typeof check.note !== "string" || !check.note.trim()) {
                    errors.push(`${file}: labStatus.${key}.note must be a non-empty string`);
                }
            }
        }
    }
}

try {
    const journey = JSON.parse(fs.readFileSync(path.join(root, "data", "team-journey.json"), "utf8"));
    if (typeof journey.message !== "string" || !journey.message.startsWith("GROUP 3 →")) {
        errors.push("team-journey.json: message must start with 'GROUP 3 →'");
    }
    if (!journey.labStatus?.teamMerge) {
        errors.push("team-journey.json: labStatus.teamMerge is required");
    }
} catch (e) {
    errors.push(`team-journey.json: JSON syntax error -> ${e.message}`);
}

if (errors.length) {
    console.error("\n CI VALIDATION FAILED\n");
    errors.forEach(e => console.error(" - " + e));
    process.exit(1);
}

console.log(`✅ CI VALIDATION PASSED (${files.length} lecture files + team journey)`);
