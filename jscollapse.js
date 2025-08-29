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
    id: 1,
    name: "Burrow My Hope of Winning",
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
      "Grade: B+"
    ]
  },
  {
  "id": 2,
  "name": "Goon Squad",
  "strengths": [
    "Elite RB1 production with Christian McCaffrey",
    "Strong WR corps in PPR formats: Cooper Kupp, Jaylen Waddle, Rashee Rice, Brian Thomas Jr., Dontayvion Wicks",
    "High-upside TE in Kyle Pitts and QB upside with Kyler Murray and Trevor Lawrence"
  ],
  "weaknesses": [
    "RB depth relies on lottery tickets: De’Von Achane, Blake Corum, Jonathon Brooks, Jaylen Wright",
    "Injury risk at key positions, especially McCaffrey and Murray"
  ],
  "overall": [
        "Strengths: Elite RB1 production with Christian McCaffrey; strong WR corps in PPR formats: Cooper Kupp, Jaylen Waddle, Rashee Rice, Brian Thomas Jr., Dontayvion Wicks; high-upside TE in Kyle Pitts and QB upside with Kyler Murray and Trevor Lawrence.",
    "Weaknesses: RB depth relies on lottery tickets: De’Von Achane, Blake Corum, Jonathon Brooks, Jaylen Wright; injury risk at key positions, especially McCaffrey and Murray."
  ]
},
  { id: 3, name: "J", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
  { id: 4, name: "Deep Distrust", strengths: ["Strength 1 Placeholder"], weaknesses: ["Weakness 1 Placeholder"], overall: ["Overall Placeholder"] },
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
