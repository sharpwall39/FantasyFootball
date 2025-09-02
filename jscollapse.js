function toggleAnalysis(id, button) {
  const content = document.getElementById(id);

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.classList.add("active");
  } else {
    content.style.display = "none";
    button.classList.remove("active");
  }
}

// === Team Data ===
const teamsData = [
{
  "id": 1,
  "name": "Burrow My Hope of Winning",
  "strengths": [
    "Loaded WR corps with CeeDee Lamb, Davante Adams, Mike Evans, and Christian Kirk — elite production and depth.",
    "Solid RB depth with Bucky Irving, Tony Pollard, Isiah Pacheco.",
    "Upside QB/TE with Dak Prescott and Dalton Kincaid"
  ],
  "weaknesses": [
    "Nick Chubb (Round 9) is a question mark coming off injury and may not return to form.",
    "Early DST (Round 10) and kicker (Round 11) picks reduced bench upside.",
    "WR depth is strong but aging — Adams and Evans could regress."
  ],
  "overall": [
    "Best Value Pick: Mike Evans in Round 4 — still a red-zone monster and WR2 floor",
    "Grade: B (One of the deepest WR rooms in the league and solid RB depth, invested too early in DST/K.",
    "True to form, this Cowboys-loving manager drafted like Dallas plays in January — flashy start, questionable depth, and probably watching the playoffs from home again."
  ]
}, 
{ id: 2, name: "Goon Squad", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] }
},
  { id: 3, name: "J", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  {
  "id": 4,
  "name": "Deep Distrust",
  "strengths": [
    "Elite core trio with Bijan Robinson, Tyreek Hill, and Lamar Jackson providing weekly top-5 upside.",
    "Strong positional edge at tight end with Mark Andrews in Round 6.",
    "Upside WR depth with Calvin Ridley, Courtland Sutton, and Rashod Bateman offering ceiling plays."
  ],
  "weaknesses": [
    "RB2 volatility with Cam Skattebo, Rachaad White, and Justice Hill — lack of stability behind Bijan.",
    "WR2/3 inconsistency with Sutton and Ridley as streaky options.",
    "Bench lacks reliable weekly starter appeal beyond Rachaad White.",
    "Draft capital spent too early on kicker (Brandon Aubrey, Round 8) and DST (Vikings, Round 13)."
  ],
  "overall": [
    "Best Value Pick: Rachaad White in Round 11 — strong dual-threat RB and potential season-saving RB2.",
    "Grade: B- (Elite foundation with Bijan, Lamar, Tyreek, and Andrews, but fragile RB2/WR2 depth. Needs waiver wire success to contend for a title.)"
  ]
},
  { id: 5, name: "Deseans's Happy Ending", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 6, name: "Princeton's Finest", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 7, name: "Drinking the Sauce", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 8, name: "Team Boldt", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 9, name: "Cancer Killers", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 10, name: "MEL KIPER RIGOS", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 11, name: "Elder Academy at Chapel Hill", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 12, name: "The People Parsons", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 13, name: "Aztec Warriors", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 14, name: "The fastest Rigos", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] }
];
// === Generator ===
function generateTeams(teams) {
  const container = document.getElementById("teams-container");

  teams.forEach(team => {
    const teamDiv = document.createElement("div");
    teamDiv.className = "team-analysis";
    teamDiv.id = `team${team.id}`;

    teamDiv.innerHTML = `
      <h2>
        <button onclick="toggleAnalysis('team${team.id}-content', this)">${team.name}</button>
      </h2>
      <div id="team${team.id}-content" style="display:none;">
        <h3>Strengths:</h3>
        <div class="analysis-section">
          ${team.strengths.map(s => `<p><strong>${s}</strong></p>`).join("")}
        </div>

        <h3>Weaknesses / Risks:</h3>
        <div class="analysis-section">
          ${team.weaknesses.map(w => `<p><strong>${w}</strong></p>`).join("")}
        </div>

        <h3>Overall:</h3>
        <div class="analysis-section">
          ${team.overall.map(o => `<p><strong>${o}</strong></p>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(teamDiv);
  });
}

// Run generator
generateTeams(teamsData);
