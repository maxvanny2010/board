# Group 3 — ClickUp Workflow

## Status flow

Normal flow:

```text
BACKLOG → TO DO → IN PROGRESS → IN REVIEW → DONE → CLOSED
```

If review fails:

```text
IN REVIEW → REJECTED → IN PROGRESS → IN REVIEW
```

## Status meaning

- **BACKLOG** — prepared but not released.
- **TO DO** — released and ready to start.
- **IN PROGRESS** — student is actively working.
- **IN REVIEW** — work is pushed, PR is open, CI is green, and Team Lead review is required.
- **REJECTED** — Team Lead requested changes.
- **DONE** — PR has been approved and merged.
- **CLOSED** — final administrative closure by the Team Lead.

## Who changes statuses

### Team Lead

The Team Lead moves:

```text
BACKLOG → TO DO
IN REVIEW → REJECTED
DONE → CLOSED
```

The Team Lead also reviews the GitHub Pull Request using:

```text
Approve
or
Request changes
```

### Student

The student moves:

```text
TO DO → IN PROGRESS
IN PROGRESS → IN REVIEW
REJECTED → IN PROGRESS
after successful merge → DONE
```

## Starting a task

Do not start a task that is still in `BACKLOG`.

When your assigned task appears in `TO DO`:

1. Open the task and read the full description.
2. Move it to `IN PROGRESS`.
3. Use the exact branch name and instructions written in the task.
4. Follow `GIT-RULES.md`.

## Sending work for review

When:

- your changes are pushed;
- the Pull Request is open;
- CI is green;

move the task to:

```text
IN REVIEW
```

Then open the task **Activity / Comments** area, type `@`, select the Team Lead profile, and send:

```text
@Maksym Voronianskyi Ready for review
```

Select the user from the ClickUp mention list. Do not just type a plain-text name.

## If review fails

The Team Lead will:

1. choose **Request changes** on GitHub;
2. move the ClickUp task to `REJECTED`;
3. leave a ClickUp comment mentioning the student and explaining what must be fixed.

Example:

```text
@StudentName Changes requested. Please fix the same branch and Pull Request.
```

The student then:

1. moves `REJECTED → IN PROGRESS`;
2. fixes the same branch;
3. commits and pushes again;
4. waits for green CI;
5. moves the task back to `IN REVIEW`;
6. mentions the Team Lead again with `Ready for review`.

Do not create a new branch or new Pull Request only because review failed.

## If review passes

The Team Lead approves the Pull Request on GitHub.

The student then:

1. merges the Pull Request;
2. verifies that the merge completed successfully;
3. moves the ClickUp task to `DONE`.

The Team Lead then moves:

```text
DONE → CLOSED
```

## Slack notifications

The private Slack channel is used for project coordination and GitHub notifications.

ClickUp mentions are used for targeted communication:

- student mentions Team Lead when work is ready for review;
- Team Lead mentions the specific student when changes are requested.

This avoids sending every status transition to the whole group.
