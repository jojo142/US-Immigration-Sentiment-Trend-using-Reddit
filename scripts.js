// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const introDiv = document.createElement("div");
    introDiv.id = "project-intro";
    introDiv.style.fontFamily = "Georgia, serif";
    introDiv.style.color = "#000";
    introDiv.style.lineHeight = "1.8";
    introDiv.style.margin = "50px auto";
    introDiv.style.maxWidth = "900px";

    introDiv.innerHTML = `
        <!-- Cover Page -->
        <div style="text-align:center; margin-bottom:50px;">
            <h1 style="margin-bottom:10px;">Borders of Opinion: Immigration Sentiment on Reddit</h1>
            <h3 style="margin-top:0; font-weight:normal;">BUS244A: Gen AI Foundations for Business</h3>
            <p><strong>Authors:</strong> Samiya Islam, Anokh Palakurthi, Yuming Ruan, Madhurima Roy</p>
            <p><strong>Professor:</strong> Shubranshu Shekhar</p>
            <p><strong>Date:</strong> October 18, 2025</p>
        </div>

        <!-- Main Content Left-Aligned -->
        <div style="text-align:left; margin-left:30px; margin-right:30px;">
            <h2>Overview</h2>
            <p>This project explores how public sentiment toward immigration has evolved on Reddit since the onset of the COVID-19 pandemic. We analyze discussions across multiple subreddits to understand how major political and social events — such as the 2022 U.S. congressional elections — have shaped online discourse surrounding border security, asylum policy, and national identity.</p>
            <p>While Reddit is often perceived as a left-leaning digital space, our research investigates whether broader national trends toward conservatism have influenced sentiment on the platform. By examining shifts in tone, topics, and engagement patterns, we aim to uncover how Reddit communities reflect — or resist — changing cultural attitudes about immigration in the United States.</p>

            <h2>Research Motivation</h2>
            <p>Cultural attitudes toward immigration have long been a source of polarization. The rise of social media has amplified this divide, creating new spaces for empathy and hostility alike. Unlike other platforms such as X (formerly Twitter) or Facebook, Reddit’s threaded discussions and community-driven moderation provide a unique environment for contextual, longitudinal sentiment analysis.</p>
            <p>Our study contributes to understanding how external shocks — including pandemics, elections, and protests — influence online empathy, hostility, and ideological drift.</p>

            <h2>Project Components & Methodology</h2>
            <p>We analyze Reddit data using transformer-based NLP models, topic modeling, and trend visualization. Tools include Python (pandas, NumPy, nltk, transformers, BERTopic), Reddit API (PRAW), and Tableau / Power BI for visualization.</p>

            <h2>Expected Outcomes</h2>
            <p>We aim to provide quantitative and qualitative insights into how Reddit sentiment toward immigration has shifted in recent years, with visualizations highlighting temporal trends around major events and discussions of implications for digital discourse and policy perception.</p>

            <p style="margin-top:40px;">Scroll down to see our visualizations and findings!</p>
        </div>
    `;

    // Insert at the top of the page
    const notebookDiv = document.getElementById("notebook");
    if (notebookDiv) {
        notebookDiv.parentNode.insertBefore(introDiv, notebookDiv);
    } else {
        document.body.insertBefore(introDiv, document.body.firstChild);
    }
});
