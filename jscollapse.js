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
// You just edit this object to update all your reports
const teamsData = [
  {
    number: 1,
    strengths: [
      "WR Depth: Nico Collins, Rashee Rice, Ricky Pearsall, Matthew Golden, and Emeka Egbuka provide a mix of breakout potential and solid weekly options. Rice and Collins are your potential WR1/2.",
      "Upside RBs: Chase Brown is a high-upside pick at RB2. Braelon Allen and Omarion Hampton could deliver value if they secure work in their backfields.",
      "Quarterback: Drake Maye is a high-upside QB with rushing ability, which boosts PPR upside."
    ],
    weaknesses: [
      "RB Reliability: Outside of Chase Brown, the RB group is unproven or situational.",
      "TE: Chig Okonkwo is a late-round TE with some touchdown upside but limited target share.",
      "Bye Weeks: You have overlapping byes for some key WRs (Round 6–8)."
    ],
    overall: [
      "Ceiling: High, thanks to WR depth and upside RBs.",
      "Floor: Moderate, due to uncertain RB production and lack of a proven TE.",
      "Grade: B+",
      "Funny Blurb: WRs aplenty, RBs a gamble, TE a mystery—this squad could fly high or make you wish you had a crystal ball."
    ]
  },
  {
    number: 2,
    strengths: ["Strength 1 Placeholder"],
    weaknesses: ["Weakness 1 Placeholder"],
    overall: ["Overall Placeholder"]
  },
  {
    number: 3,
    strengths: ["Strength 1 Placeholder"],
    weaknesses: ["Weakness 1 Placeholder"],
    overall: ["Overall Placeholder"]
  },
  // keep adding up through 14
];

// === Generator ===
function generateTeams(teams) {
  const container = document.getElementById("teams-container");

  teams.forEach(team => {
    const teamDiv = document.createElement("div");
    teamDiv.className = "team-analysis";
    teamDiv.id = `team${team.number}`;

    teamDiv.innerHTML = `
      <h2>
        <button onclick="toggleAnalysis('team${team.number}-content', this)">Team ${team.number} Analysis</button>
      </h2>
      <div id="team${team.number}-content" style="display:none;">
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
