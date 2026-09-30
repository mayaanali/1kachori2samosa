// ==========================================================================
// OXFORD MATHEMATICS D2 (8TH EDITION) EXAM CRAM GUIDE & GAME ENGINE
// ==========================================================================

const conceptsMarkdown = `
# Oxford Mathematics D2 (8th Edition) Exam Cram Guide

## Part 1: Important Notes & How-To Guides

<div id="ch1"></div>

### 📘 Chapter 1 (Linear Functions and Graphs) — Exercise 1A
This exercise focuses on the basics of plotting straight lines from equations.

#### 📌 Key Points:
* **Linear Equation:** An equation that, when graphed, forms a perfect straight line. Example: $y = 2x + 1$.
* **Ordered Pairs $(x, y)$:** Points on the Cartesian plane. $x$ is the horizontal distance (left/right), $y$ is the vertical distance (up/down).
* **The Table of Values:** A tool used to turn an equation into points we can plot.

#### 🛠️ How to Plot a Linear Graph (1A Method):
1. **Choose Inputs ($x$ values):** Usually pick 3 simple whole numbers (e.g., -1, 0, 1 or 0, 1, 2).
2. **Calculate Outputs ($y$ values):** Put your chosen $x$ values into the equation to find the corresponding $y$ values. Organize these into a table.
3. **Plot the Points:** Plot the $(x, y)$ coordinates on graph paper.
4. **Draw the Line:** Use a ruler to join the points. If they don't form a perfect straight line, you made a calculation mistake.

---

<div id="ch2"></div>

### 📕 Chapter 2 (Simultaneous Linear Equations) — Exercises 2A & 2B
These exercises involve finding the common solution for two different linear equations.

#### 📌 Key Points:
* **Simultaneous Equations:** A pair of equations like:
  $$y = x + 1$$
  $$y = -2x + 4$$
* **The Solution:** The single $(x, y)$ coordinate point that works in both equations. On a graph, this is the **Point of Intersection** (where the lines cross).

#### 🛠️ How to Solve Simultaneous Equations (The Graphical Method):
1. **Prep Equation 1:** Choose $x$ values, calculate $y$ values, and create a table.
2. **Draw Line 1:** Plot the points on the axes and draw the straight line.
3. **Prep Equation 2:** Create a separate table of values for the second equation.
4. **Draw Line 2:** Plot these points on the same set of axes and draw the second line.
5. **Find the Intersection:** Look at the graph to find where the two lines cross. Read the exact $(x, y)$ coordinates of that point. This is your solution.
6. **Check (Optional but smart):** Plug your $(x, y)$ solution back into both original equations to ensure they are true.

---

<div id="special-cases"></div>

### ⚡ Special Cases (Ex 2B):
* **One Solution:** The lines have different gradients and cross at exactly one point. *(Most common)*
* **No Solution:** The lines are parallel (same gradient, different $y$-intercepts). They never cross.
* **Infinite Solutions:** The two equations describe the same identical line. The lines lie right on top of each other.
`;

// Complete User-Provided MCQs with Verified Correct Answer Index (0=a, 1=b, 2=c, 3=d)
const mcqDatabase = [
    {
        id: 1,
        question: "What is the gradient ($m$) of the line $y = 5x - 3$?",
        options: ["5", "-3", "3", "-5"],
        correctIndex: 0
    },
    {
        id: 2,
        question: "Identify the $y$-intercept ($c$) for the line $y = -2x + 7$.",
        options: ["-2", "-7", "7", "2"],
        correctIndex: 2
    },
    {
        id: 3,
        question: "Calculate the gradient of the line passing through points $A(1, 2)$ and $B(4, 8)$.",
        options: ["2", "1", "3", "-2"],
        correctIndex: 0
    },
    {
        id: 4,
        question: "A horizontal line has a gradient of:",
        options: ["1", "Undefined", "0", "-1"],
        correctIndex: 2
    },
    {
        id: 5,
        question: "What is the gradient of a vertical line?",
        options: ["1", "0", "-1", "Undefined"],
        correctIndex: 3
    },
    {
        id: 6,
        question: "Given the line $3x - y = 6$, rewrite it in the form $y = mx + c$.",
        options: ["$y = 3x - 6$", "$y = -3x + 6$", "$y = -3x - 6$", "$y = 3x + 6$"],
        correctIndex: 0
    },
    {
        id: 7,
        question: "Which of these lines is parallel to $y = 4x + 1$?",
        options: ["$y = -4x + 1$", "$y = 4x - 5$", "$y = x + 4$", "$y = -x - 4$"],
        correctIndex: 1
    },
    {
        id: 8,
        question: "Find the $x$-intercept of the line $y = 2x - 4$.",
        options: ["(0, 2)", "(0, 4)", "(2, 0)", "(-2, 0)"],
        correctIndex: 2
    },
    {
        id: 9,
        question: "What is the equation of the line passing through (0, 5) with a gradient of -3?",
        options: ["$y = -3x - 5$", "$y = 5x - 3$", "$y = -3x + 5$", "$y = 3x + 5$"],
        correctIndex: 2
    },
    {
        id: 10,
        question: "Does the point (2, 3) lie on the line $y = 2x - 1$?",
        options: ["Yes", "No", "Impossible to determine", "Only when $y=0$"],
        correctIndex: 0
    },
    {
        id: 11,
        question: "A taxi service charges a fixed rate of $\\$2.50$ plus $\\$1.80$ per kilometer traveled ($x$). What is the equation for the total cost ($y$)?",
        options: ["$y = 1.80x + 2.50$", "$y = 2.50x + 1.80$", "$y = 4.30x$", "$y = 1.80x - 2.50$"],
        correctIndex: 0
    },
    {
        id: 12,
        question: "In the taxi equation $y = 1.80x + 2.50$, what does the gradient 1.80 represent?",
        options: ["Total distance", "Rate per kilometer", "Fixed base fee", "Total time"],
        correctIndex: 1
    },
    {
        id: 13,
        question: "The fixed cost for a catering service is $\\$50$, and they charge $\\$15$ per person for a party of $x$ people. What is the total cost ($y$) equation?",
        options: ["$y = 15x + 50$", "$y = 50x + 15$", "$y = 65x$", "$y = 15x - 50$"],
        correctIndex: 0
    },
    {
        id: 14,
        question: "To eliminate $y$ by addition in the system $2x + 3y = 7$ and $x - 3y = 1$, which condition must be met?",
        options: [
            "The coefficients of $y$ must have opposite signs.",
            "The coefficients of $y$ must be equal.",
            "The coefficients of $x$ must have opposite signs.",
            "The coefficients of $x$ must be equal."
        ],
        correctIndex: 0
    },
    {
        id: 15,
        question: "Solve the system by elimination: $x + y = 10$ and $x - y = 4$.",
        options: ["$x=6, y=4$", "$x=7, y=3$", "$x=4, y=6$", "$x=3, y=7$"],
        correctIndex: 1
    },
    {
        id: 16,
        question: "Solve the system by elimination: $2x + y = 11$ and $x - y = 1$.",
        options: ["$x=5, y=1$", "$x=4, y=3$", "$x=3, y=5$", "$x=1, y=5$"],
        correctIndex: 1
    },
    {
        id: 17,
        question: "To use addition to eliminate $x$ in this system ($3x + y = 8$ and $x + 2y = 11$), how would you modify the equations?",
        options: [
            "Multiply the second equation by 3.",
            "Multiply the first equation by 2.",
            "Multiply the second equation by -3.",
            "Multiply the first equation by -2."
        ],
        correctIndex: 2
    },
    {
        id: 18,
        question: "What is the solution to the system whose graphs intersect at (3, 2)?",
        options: ["$x=3, y=3$", "$x=2, y=3$", "$x=3, y=2$", "No solution"],
        correctIndex: 2
    },
    {
        id: 19,
        question: "If two lines graphed are parallel, how many solutions are there?",
        options: ["Zero", "One unique solution", "Two solutions", "Infinite solutions"],
        correctIndex: 0
    },
    {
        id: 20,
        question: "A point (2, -1) lies on both graphed lines. This point represents:",
        options: ["The $y$-intercept", "The $x$-intercept", "The solution to the system", "A mistake in the calculation"],
        correctIndex: 2
    },
    {
        id: 21,
        question: "Identify the gradient ($m$) of the line passing through point $A(0, 0)$ and point $B(2, 4)$.",
        options: ["2", "-2", "0", "4"],
        correctIndex: 0
    },
    {
        id: 22,
        question: "The equation for a line passing through the origin with a gradient of -1 is:",
        options: ["$y = -x$", "$y = x$", "$y = -1$", "$y = x - 1$"],
        correctIndex: 0
    },
    {
        id: 23,
        question: "Rearrange $2x + y = 3$ to isolate $y$.",
        options: ["$y = -2x - 3$", "$y = 2x - 3$", "$y = -2x + 3$", "$y = 2x + 3$"],
        correctIndex: 2
    },
    {
        id: 24,
        question: "Calculate the horizontal change (run) between points $P(-1, 2)$ and $Q(3, 2)$.",
        options: ["4", "-4", "2", "0"],
        correctIndex: 0
    },
    {
        id: 25,
        question: "What is the $y$-intercept of the line $y = 3$?",
        options: ["(0, 0)", "(0, 3)", "(3, 0)", "(-3, 0)"],
        correctIndex: 1
    },
    {
        id: 26,
        question: "Calculate the vertical change (rise) between point $M(1, 5)$ and point $N(1, 10)$.",
        options: ["0", "5", "-5", "10"],
        correctIndex: 1
    },
    {
        id: 27,
        question: "Find the gradient of the line passing through points $(2, 1)$ and $(5, 1)$.",
        options: ["3", "1", "0", "-1"],
        correctIndex: 2
    },
    {
        id: 28,
        question: "The equation of a straight line with a gradient of 3 and passing through the origin is:",
        options: ["$y = 3x$", "$y = x + 3$", "$y = 3x + 1$", "$y = 3$"],
        correctIndex: 0
    },
    {
        id: 29,
        question: "Identify the $y$-intercept of the line given by $y - 3x = 5$.",
        options: ["-3", "3", "-5", "5"],
        correctIndex: 3
    },
    {
        id: 30,
        question: "Which point does NOT lie on the line $y = x - 2$?",
        options: ["(0, -2)", "(2, 0)", "(1, -1)", "(3, 2)"],
        correctIndex: 3
    },
    {
        id: 31,
        question: "A conversion graph shows that $0^\\circ \\text{C} = 32^\\circ \\text{F}$ and $100^\\circ \\text{C} = 212^\\circ \\text{F}$. What is the $y$-intercept (the $\\text{F}$ value) for this line?",
        options: ["0", "32", "100", "212"],
        correctIndex: 1
    },
    {
        id: 32,
        question: "A factory has a fixed production cost of $\\$1000$ and a marginal cost of $\\$5$ for each widget produced ($x$). What is the equation for total cost ($y$)?",
        options: ["$y = 1000x + 5$", "$y = 5x + 1000$", "$y = 5x - 1000$", "$y = 1005x$"],
        correctIndex: 1
    },
    {
        id: 33,
        question: "In the cost equation $y = 5x + 1000$, what does the fixed production cost of $\\$1000$ represent?",
        options: ["Rate per widget", "The gradient", "Fixed base cost ($y$-intercept)", "Total widgets"],
        correctIndex: 2
    },
    {
        id: 34,
        question: "A parking garage charges a flat fee of $\\$3.00$ plus $\\$2.00$ per hour ($h$). What is the total parking cost ($y$) equation?",
        options: ["$y = 2.00h + 3.00$", "$y = 3.00h + 2.00$", "$y = 5.00h$", "$y = 3.00 + 2.00$"],
        correctIndex: 0
    },
    {
        id: 35,
        question: "The distance-time graph of a car traveling at a constant speed of $80\\text{ km/h}$ starting from point A at time $t=0$. What does the gradient of this graph represent?",
        options: ["Distance", "Time", "Constant Speed (rate)", "Direction"],
        correctIndex: 2
    },
    {
        id: 36,
        question: "A simple equation to calculate distance ($d$) based on constant speed ($v$) and time ($t$) is $d = vt$. Does this show a direct proportion relationship?",
        options: ["Yes", "No", "Only for specific speeds", "Not determinable"],
        correctIndex: 0
    },
    {
        id: 37,
        question: "If a rental company charges a flat fee of $\\$40$ for a tool rental, regardless of how long you use it. What is the gradient of the graph of total cost vs. time?",
        options: ["40", "0", "Undefined", "Impossible to say"],
        correctIndex: 1
    },
    {
        id: 38,
        question: "The system $y = 2x + 1$ and $y = 2x + 5$ has lines that are:",
        options: ["Parallel", "Intersecting at one point", "Coincident (identical)", "Impossible to say"],
        correctIndex: 0
    },
    {
        id: 39,
        question: "If a graphical solution results in coincident lines (one on top of the other), the system has:",
        options: ["One solution", "No solution", "Infinite solutions", "A mistake"],
        correctIndex: 2
    },
    {
        id: 40,
        question: "The system $y = x + 3$ and $y = 2x - 1$ has graphs that are lines. Based on their gradients, how many solutions will this system have?",
        options: ["Zero", "One solution", "Infinite solutions", "Impossible to determine"],
        correctIndex: 1
    },
    {
        id: 41,
        question: "To solve $3x + y = 6$ graphically, which step is generally done first with the equation?",
        options: ["Rearrange to isolate $y$ ($y = mx + c$).", "Rearrange to isolate $x$.", "Pick arbitrary points.", "Plot the point $(3,1)$ arbitrarily."],
        correctIndex: 0
    },
    {
        id: 42,
        question: "Given the equation $y = 3x - 1$, if $x = 2$, what is the value of $y$?",
        options: ["5", "3", "2", "1"],
        correctIndex: 0
    },
    {
        id: 43,
        question: "Identify the $y$-value when $x=0$ for the equation $y = x + 4$.",
        options: ["1", "3", "4", "0"],
        correctIndex: 2
    },
    {
        id: 44,
        question: "When plotting the line $y = -x$, if $x$ increases, what happens to $y$?",
        options: ["$y$ increases.", "$y$ remains the same.", "$y$ decreases.", "$y$ goes to zero."],
        correctIndex: 2
    },
    {
        id: 45,
        question: "Given $y = \\frac{1}{2}x + 2$. If $x = 0$, what is $y$?",
        options: ["0", "2", "1/2", "4"],
        correctIndex: 1
    },
    {
        id: 46,
        question: "How many points are minimum required to draw a straight line, though three are recommended for checking?",
        options: ["1", "2", "3", "4"],
        correctIndex: 1
    },
    {
        id: 47,
        question: "Given $y = 2x - 3$. If $y = 1$, what is the value of $x$?",
        options: ["-1", "1", "2", "3"],
        correctIndex: 2
    },
    {
        id: 48,
        question: "Identify the correct ordered pair $(x, y)$ for the equation $y = 4x$ when $x=1$.",
        options: ["(1, 5)", "(4, 1)", "(1, 4)", "(0, 4)"],
        correctIndex: 2
    },
    {
        id: 49,
        question: "Which of these is a linear equation?",
        options: ["$y = 2x^2 + 1$", "$y = 5x - 3$", "$y = \\sqrt{x}$", "$xy = 10$"],
        correctIndex: 1
    },
    {
        id: 50,
        question: "In the equation $y = c$ (where $c$ is a constant number, like $y=3$), the table of values will always show the same $y$ value regardless of $x$. What type of line is this?",
        options: ["Vertical", "Horizontal", "Sloping upward", "Sloping downward"],
        correctIndex: 1
    },
    {
        id: 51,
        question: "The graphical solution to a pair of simultaneous equations is found at the:",
        options: ["$y$-intercept of the first line.", "$x$-intercept of the second line.", "Origin $(0, 0)$.", "Point of intersection."],
        correctIndex: 3
    },
    {
        id: 52,
        question: "To solve $y = x$ and $y = -x + 4$ graphically, what is the correct first step?",
        options: ["Subtract the equations algebraically.", "Guess a solution.", "Draw both lines on the same axes.", "Multiply the equations together."],
        correctIndex: 2
    },
    {
        id: 53,
        question: "Line 1 passes through (0,1), (1,2). Line 2 passes through (0,5), (1,4). They cross at (2,3). What is the solution?",
        options: ["$(1, 2)$", "$(2, 3)$", "$(0, 1)$", "$(1, 4)$"],
        correctIndex: 1
    },
    {
        id: 54,
        question: "You graph two lines and they turn out to be parallel. How many solutions are there?",
        options: ["One solution", "No solution", "Infinite solutions", "Two solutions"],
        correctIndex: 1
    },
    {
        id: 55,
        question: "Does the point $(1, 2)$ work as a simultaneous solution for $y = 2x$ and $y = x + 1$?",
        options: ["Yes", "No", "Impossible to determine graphically", "Only for the first equation"],
        correctIndex: 0
    },
    {
        id: 56,
        question: "To make $2x + y = 5$ easier to plot, how should you rearrange it into a 'y = ...' format?",
        options: ["$y = 2x + 5$", "$y = 5x - 2$", "$y = -2x + 5$", "$y = 2x - 5$"],
        correctIndex: 2
    },
    {
        id: 57,
        question: "If two equations graph as the exact same line, lying one on top of the other, the system has:",
        options: ["Zero solutions.", "One unique solution.", "Two solutions.", "Infinitely many solutions."],
        correctIndex: 3
    },
    {
        id: 58,
        question: "What is the graphical solution for $y = 2$ and $x = 3$?",
        options: ["$(2, 3)$", "$(3, 2)$", "No solution because they are straight.", "$(0, 0)$"],
        correctIndex: 1
    },
    {
        id: 59,
        question: "When solving simultaneous equations graphically, why is it vital to use graph paper and a sharp pencil?",
        options: ["To make the homework look neat.", "So the teacher can read it easily.", "To ensure the lines are straight.", "To read the intersection point coordinates accurately."],
        correctIndex: 3
    },
    {
        id: 60,
        question: "When checking a graphical solution $(x, y)$, you must plug the values into:",
        options: ["The first equation only.", "The second equation only.", "Both equations.", "Neither, the graph is proof enough."],
        correctIndex: 2
    },
    {
        id: 61,
        question: "Lines that have different slopes (gradients) will always have:",
        options: ["One intersection point.", "Zero intersection points.", "Infinite intersection points.", "Parallel slopes."],
        correctIndex: 0
    },
    {
        id: 62,
        question: "Line A ($y=x+3$) and Line B ($y=-x+1$) intersect. What is the $x$ coordinate of the intersection?",
        options: ["1", "-1", "3", "0"],
        correctIndex: 1
    },
    {
        id: 63,
        question: "Parallel lines will never form a simultaneous solution. Parallel lines have:",
        options: [
            "Different gradients and different intercepts.",
            "Same gradients and different intercepts.",
            "Same gradients and same intercepts.",
            "Different gradients and same intercepts."
        ],
        correctIndex: 1
    },
    {
        id: 64,
        question: "Given the system: $y = 2x$ and $y = 2x + 4$. The lines are:",
        options: ["Intersecting", "Parallel", "Coincident", "Vertical"],
        correctIndex: 1
    },
    {
        id: 65,
        question: "The solution point $(1, -2)$ means:",
        options: ["$x = 1, y = 2$", "$x = -2, y = 1$", "$x = 1, y = -2$", "$x = -1, y = -2$"],
        correctIndex: 2
    },
    {
        id: 66,
        question: "Given $2y = 4x + 6$. What is the $y$ value when $x = 1$?",
        options: ["10", "5", "4", "2"],
        correctIndex: 1
    },
    {
        id: 67,
        question: "The Cartesian plane is made up of two axes. The vertical axis is the:",
        options: ["$x$-axis", "$y$-axis", "origin", "quadrant"],
        correctIndex: 1
    },
    {
        id: 68,
        question: "True or False: The graphical method is always faster than algebraic methods like elimination.",
        options: ["True", "False"],
        correctIndex: 1
    },
    {
        id: 69,
        question: "To plot $y = \\frac{x}{2}$, which set of $x$ inputs would make calculations easiest (avoiding fractions)?",
        options: ["{-1, 0, 1}", "{0, 1, 2}", "{-2, 0, 2}", "{1, 3, 5}"],
        correctIndex: 2
    },
    {
        id: 70,
        question: "If you solve $y = 3x$ and $y = x + 4$ graphically, and you find they intersect at $(2, 6)$, is this correct?",
        options: ["Correct", "Incorrect"],
        correctIndex: 0
    }
];

// Helper: Markdown parser with Math protection
function parseMarkdownSafely(text) {
    if (window.marked && typeof window.marked.parse === 'function') {
        const mathHolders = [];
        const protectedText = text.replace(/\\$\\$(.*?)\\$\\$|\\$(.*?)\\$/gs, function(match) {
            mathHolders.push(match);
            return '@@MATH_CHUNK_' + (mathHolders.length - 1) + '@@';
        });
        let parsed = window.marked.parse(protectedText);
        parsed = parsed.replace(/@@MATH_CHUNK_(\\d+)@@/g, function(match, i) {
            return mathHolders[Number(i)];
        });
        return parsed;
    }
    // Simple fallback
    return text.replace(/\\n/g, '<br>');
}

// Utility: Fisher-Yates array shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// LocalStorage Persistence
const STORAGE = {
    SCORES: 'nature_mcq_scores_d2',
    POOL: 'nature_mcq_pool_d2'
};

function loadScores() {
    try {
        const data = localStorage.getItem(STORAGE.SCORES);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function recordScore(record) {
    try {
        const scores = loadScores();
        scores.unshift(record);
        localStorage.setItem(STORAGE.SCORES, JSON.stringify(scores));
    } catch (e) {
        console.error(e);
    }
}

function getAvailableQPool() {
    try {
        const data = localStorage.getItem(STORAGE.POOL);
        let ids = data ? JSON.parse(data) : null;
        if (!ids || ids.length === 0) {
            ids = mcqDatabase.map(q => q.id);
            localStorage.setItem(STORAGE.POOL, JSON.stringify(ids));
        }
        return ids;
    } catch {
        return mcqDatabase.map(q => q.id);
    }
}

function saveAvailableQPool(ids) {
    try {
        localStorage.setItem(STORAGE.POOL, JSON.stringify(ids));
    } catch (e) {
        console.error(e);
    }
}

function clearAllScores() {
    localStorage.removeItem(STORAGE.SCORES);
    localStorage.removeItem(STORAGE.POOL);
    refreshScoreboards();
    updatePoolIndicator();
}

function refreshScoreboards() {
    const scores = loadScores();
    const lists = [document.getElementById('home-score-list'), document.getElementById('game-score-list')];

    lists.forEach(list => {
        if (!list) return;
        list.innerHTML = '';
        if (scores.length === 0) {
            list.innerHTML = '<li class="empty-item">No game scores recorded yet. Jump into the game arena!</li>';
            return;
        }

        scores.slice(0, 10).forEach(s => {
            const badgeClass = s.percentage >= 80 ? 'high-badge' : s.percentage >= 50 ? 'mid-badge' : 'low-badge';
            const li = document.createElement('li');
            li.className = 'score-row';
            li.innerHTML = `
                <div class="score-meta">
                    <span class="score-date">${s.date}</span>
                    <span class="score-details">${s.correctCount} of ${s.totalCount} correct</span>
                </div>
                <div class="score-pill ${badgeClass}">${s.percentage}%</div>
            `;
            list.appendChild(li);
        });
    });

    const statGames = document.getElementById('stat-total-games');
    if (statGames) statGames.textContent = scores.length;
}

function updatePoolIndicator() {
    const pool = getAvailableQPool();
    const el = document.getElementById('pool-remaining');
    if (el) el.textContent = pool.length;
}

// ==========================================================================
// GAME STATE & ENGINE
// ==========================================================================
let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let isAnswerLocked = false;
let roundAnswersHistory = [];

function startNewGame() {
    let pool = getAvailableQPool();
    let chosenIds = [];

    // Select 20 questions without repetition
    if (pool.length < 20) {
        chosenIds = [...pool];
        const allIds = mcqDatabase.map(q => q.id);
        const needed = 20 - chosenIds.length;
        const restShuffled = shuffle(allIds.filter(id => !chosenIds.includes(id)));
        chosenIds = chosenIds.concat(restShuffled.slice(0, needed));
        saveAvailableQPool(restShuffled.slice(needed));
    } else {
        const shuffledPool = shuffle(pool);
        chosenIds = shuffledPool.slice(0, 20);
        saveAvailableQPool(shuffledPool.slice(20));
    }

    updatePoolIndicator();

    // Map into playable question models with shuffled options
    currentRoundQuestions = chosenIds.map(id => {
        const raw = mcqDatabase.find(q => q.id === id);
        const indexedOptions = raw.options.map((opt, i) => ({
            text: opt,
            isCorrect: i === raw.correctIndex
        }));
        const shuffledOpts = shuffle(indexedOptions);
        const correctIndexNow = shuffledOpts.findIndex(o => o.isCorrect);

        return {
            id: raw.id,
            question: raw.question,
            options: shuffledOpts.map(o => o.text),
            correctIndex: correctIndexNow
        };
    });

    currentQuestionIndex = 0;
    currentScore = 0;
    roundAnswersHistory = [];
    isAnswerLocked = false;

    // Switch screen to active game
    document.getElementById('game-intro-screen').style.display = 'none';
    document.getElementById('game-finish-screen').style.display = 'none';
    document.getElementById('game-active-screen').style.display = 'block';

    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    if (currentQuestionIndex >= currentRoundQuestions.length) {
        finishGame();
        return;
    }

    isAnswerLocked = false;
    const q = currentRoundQuestions[currentQuestionIndex];

    // Update HUD
    const hudQnum = document.getElementById('hud-qnum');
    if (hudQnum) hudQnum.textContent = `${currentQuestionIndex + 1} / 20`;

    const progressFill = document.getElementById('hud-progress-fill');
    if (progressFill) {
        const percent = ((currentQuestionIndex) / 20) * 100;
        progressFill.style.width = `${percent}%`;
    }

    const hudScore = document.getElementById('hud-score-display');
    if (hudScore) hudScore.textContent = currentScore;

    // Render Question
    const questionTextEl = document.getElementById('game-question-text');
    questionTextEl.innerHTML = `<span class="q-badge">Q${currentQuestionIndex + 1}</span> ${q.question}`;

    // Render Options
    const letters = ['a', 'b', 'c', 'd'];
    const optionsContainer = document.getElementById('game-options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'game-opt-btn';
        btn.id = `opt-btn-${optIdx}`;
        btn.innerHTML = `
            <span class="opt-letter">${letters[optIdx].toUpperCase()}</span>
            <span class="opt-text">${optText}</span>
        `;
        btn.addEventListener('click', () => handleOptionSelected(optIdx));
        optionsContainer.appendChild(btn);
    });

    // Hide Feedback Banner
    const feedbackBanner = document.getElementById('game-feedback-banner');
    feedbackBanner.style.display = 'none';

    // Rerender MathJax formulas in question and options
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
}

function handleOptionSelected(chosenIdx) {
    if (isAnswerLocked) return;
    isAnswerLocked = true;

    const q = currentRoundQuestions[currentQuestionIndex];
    const isCorrect = chosenIdx === q.correctIndex;

    if (isCorrect) {
        currentScore++;
    }

    // Save answer into history for end of game review
    roundAnswersHistory.push({
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        chosenIndex: chosenIdx,
        isCorrect: isCorrect
    });

    // Update HUD Score immediately with game pulse
    const hudScore = document.getElementById('hud-score-display');
    if (hudScore) {
        hudScore.textContent = currentScore;
        hudScore.classList.add('score-pop');
        setTimeout(() => hudScore.classList.remove('score-pop'), 400);
    }

    // Highlight Buttons
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((_, optIdx) => {
        const btn = document.getElementById(`opt-btn-${optIdx}`);
        btn.disabled = true;

        if (optIdx === q.correctIndex) {
            btn.classList.add('correct-highlight');
        } else if (optIdx === chosenIdx && !isCorrect) {
            btn.classList.add('wrong-highlight');
        } else {
            btn.classList.add('dimmed-option');
        }
    });

    // Show Feedback Banner
    const banner = document.getElementById('game-feedback-banner');
    const icon = document.getElementById('feedback-icon');
    const title = document.getElementById('feedback-title');
    const detail = document.getElementById('feedback-detail');

    banner.className = `feedback-banner ${isCorrect ? 'banner-correct' : 'banner-wrong'}`;
    if (isCorrect) {
        icon.textContent = '✓';
        title.textContent = 'Awesome! Correct Answer';
        detail.textContent = `+1 Point added to your Academic Comeback!`;
    } else {
        icon.textContent = '✗';
        title.textContent = 'Oops! Not quite';
        detail.textContent = `The correct answer is Option ${letters[q.correctIndex]}: ${q.options[q.correctIndex]}`;
    }

    banner.style.display = 'flex';

    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentRoundQuestions.length) {
        displayCurrentQuestion();
    } else {
        finishGame();
    }
}

function finishGame() {
    document.getElementById('game-active-screen').style.display = 'none';
    document.getElementById('game-finish-screen').style.display = 'block';

    const total = currentRoundQuestions.length || 20;
    const percentage = Math.round((currentScore / total) * 100);

    const now = new Date();
    const dateFormatted = now.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Save to scoreboard
    recordScore({
        date: dateFormatted,
        correctCount: currentScore,
        totalCount: total,
        percentage: percentage
    });

    refreshScoreboards();

    // Populate Finish Screen
    document.getElementById('finish-percentage').textContent = percentage;
    document.getElementById('finish-score-counts').textContent = `${currentScore} / ${total} Correct`;

    const titleEl = document.getElementById('finish-title');
    const subtitleEl = document.getElementById('finish-subtitle');

    if (percentage >= 90) {
        titleEl.textContent = "🏆 Masterclass Performance!";
        subtitleEl.textContent = "Your Academic Comeback is real! Real Madrid standard precision.";
    } else if (percentage >= 70) {
        titleEl.textContent = "🌿 Solid Game!";
        subtitleEl.textContent = "Great knowledge on D2 graphs and equations. You are well prepared!";
    } else if (percentage >= 50) {
        titleEl.textContent = "🌤️ Good Effort!";
        subtitleEl.textContent = "Passed, but review the tricky questions below to hit that top tier.";
    } else {
        titleEl.textContent = "🥟 Keep Practicing!";
        subtitleEl.textContent = "Check the Concept & Cram Guide tab to master the formulas and try another round!";
    }

    // Populate Round Review
    const reviewList = document.getElementById('round-review-list');
    reviewList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    roundAnswersHistory.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = `review-card ${item.isCorrect ? 'card-pass' : 'card-fail'}`;
        card.innerHTML = `
            <div class="card-head">
                <span class="rev-tag">${item.isCorrect ? '✓ CORRECT' : '✗ WRONG'}</span>
                <span class="rev-num">Question ${idx + 1}</span>
            </div>
            <div class="rev-q">${item.question}</div>
            <div class="rev-answers">
                <div class="ans-row">
                    <strong>Your Pick:</strong> 
                    <span class="${item.isCorrect ? 'text-pass' : 'text-fail'}">
                        Option ${letters[item.chosenIndex]}: ${item.options[item.chosenIndex]}
                    </span>
                </div>
                ${!item.isCorrect ? `
                <div class="ans-row">
                    <strong>Correct Answer:</strong> 
                    <span class="text-pass">Option ${letters[item.correctIndex]}: ${item.options[item.correctIndex]}</span>
                </div>` : ''}
            </div>
        `;
        reviewList.appendChild(card);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
}

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Concepts Cram Guide
    const conceptsEl = document.getElementById('concepts-content');
    if (conceptsEl) {
        conceptsEl.innerHTML = parseMarkdownSafely(conceptsMarkdown);
    }

    // 2. Refresh Scoreboard and Question Pool Stats
    refreshScoreboards();
    updatePoolIndicator();

    // 3. Navigation: Home <-> Mathematics
    const btnMath = document.getElementById('btn-math');
    const btnBack = document.getElementById('btn-back');
    const homeView = document.getElementById('home-view');
    const subjectView = document.getElementById('subject-view');

    if (btnMath) {
        btnMath.addEventListener('click', () => {
            homeView.classList.remove('active');
            subjectView.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
                window.MathJax.typesetPromise();
            }
        });
    }

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            subjectView.classList.remove('active');
            homeView.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            refreshScoreboards();
        });
    }

    // 4. Tabs: Concepts vs MCQs
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const pane = document.getElementById(targetId);
            if (pane) pane.classList.add('active');

            if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
                window.MathJax.typesetPromise();
            }
        });
    });

    // 5. Game Button Listeners
    const btnStartGame = document.getElementById('btn-start-game');
    if (btnStartGame) {
        btnStartGame.addEventListener('click', startNewGame);
    }

    const btnNext = document.getElementById('btn-next-question');
    if (btnNext) {
        btnNext.addEventListener('click', nextQuestion);
    }

    const btnPlayAgain = document.getElementById('btn-play-again');
    if (btnPlayAgain) {
        btnPlayAgain.addEventListener('click', startNewGame);
    }

    const btnBackToIntro = document.getElementById('btn-back-to-intro');
    if (btnBackToIntro) {
        btnBackToIntro.addEventListener('click', () => {
            document.getElementById('game-finish-screen').style.display = 'none';
            document.getElementById('game-active-screen').style.display = 'none';
            document.getElementById('game-intro-screen').style.display = 'block';
            refreshScoreboards();
            updatePoolIndicator();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const btnClearHistory = document.getElementById('btn-clear-history');
    if (btnClearHistory) {
        btnClearHistory.addEventListener('click', () => {
            if (confirm("Reset all game scores and start a fresh question cycle?")) {
                clearAllScores();
            }
        });
    }

    // 6. Smooth Jump Links for Cram Guide
    document.querySelectorAll('.fast-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 7. Keyboard support: Press Enter or Space to go to next question if banner is visible
    window.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && isAnswerLocked) {
            const banner = document.getElementById('game-feedback-banner');
            if (banner && banner.style.display !== 'none') {
                e.preventDefault();
                nextQuestion();
            }
        }
    });

    // Trigger initial MathJax rendering
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
});
