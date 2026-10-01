const lectureFiles = [
    "monday.json", "tuesday.json", "wednesday.json", "thursday.json",
    "friday.json", "saturday.json", "sunday.json"
];

const checkLabels = {
    timeChange: "Time changed",
    jsonRecovery: "JSON recovery",
    schemaRecovery: "Schema recovery"
};

function esc(value) {
    return String(value).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[c]));
}

function checkHtml(key, value) {
    const fixed = value?.status === "fixed";
    return `
    <div class="check ${fixed ? "fixed" : "pending"}">
      <div class="check-top">
        <span class="check-dot"></span>
        <span>${fixed ? "✓ " : ""}${esc(checkLabels[key])}</span>
      </div>
      <div class="check-note">${esc(value?.note || "Pending")}</div>
    </div>
  `;
}

function cardHtml(day) {
    return `
    <article class="day-card">
      <div class="day-top">
        <div>
          <div class="day-name">${esc(day.day)}</div>
          <div class="owner">${esc(day.owner)}</div>
        </div>
        <div class="state-text">${esc(day.status || "")}</div>
      </div>

      <div class="lecture-list">
        ${day.lectures.map(l => `
          <div class="lecture-row">
            <span class="time">${esc(l.time)}</span>
            <span class="room">Room ${esc(l.roomNumber)}</span>
            <span class="title">${esc(l.titleLecture)}</span>
          </div>
        `).join("")}
      </div>

      <div class="progress-block">
        <div class="progress-label">Progress</div>
        <div class="checks">
          ${checkHtml("timeChange", day.labStatus?.timeChange)}
          ${checkHtml("jsonRecovery", day.labStatus?.jsonRecovery)}
          ${checkHtml("schemaRecovery", day.labStatus?.schemaRecovery)}
        </div>
      </div>
    </article>
  `;
}

async function loadJson(path) {
    const response = await fetch(path, {cache: "no-store"});
    if (!response.ok) {
        throw new Error(`${path}: HTTP ${response.status}`);
    }
    return response.json();
}

async function boot() {
    const grid = document.getElementById("lectureGrid");

    try {
        const lectureData = await Promise.all(
            lectureFiles.map(file => loadJson(`data/lectures/${file}`))
        );

        grid.innerHTML = lectureData.map(cardHtml).join("");

        const journey = await loadJson("data/team-journey.json");
        document.getElementById("teamJourney").textContent = journey.message;

        const merge = journey.labStatus?.teamMerge;
        const badge = document.getElementById("teamMergeBadge");
        const fixed = merge?.status === "fixed";

        badge.textContent = fixed ? "✓ MERGE COMPLETE" : "PENDING";
        badge.className = `journey-status ${fixed ? "fixed" : "pending"}`;
    } catch (error) {
        console.error(error);
        grid.innerHTML = `
      <div class="error-box">
        Could not load project JSON files.<br>
        Run the site through GitHub Pages or a local static server.<br><br>
        ${esc(error.message)}
      </div>
    `;
    }
}

boot();
