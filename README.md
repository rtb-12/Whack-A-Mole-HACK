# Whack-A-Mole Game Automation - Node.js & Puppeteer

This project automates the Whack-A-Mole game using Node.js and Puppeteer. The automation script automatically plays the game by detecting and clicking the moles as they appear.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Script](#running-the-script)
- [How the Script Works](#how-the-script-works)

## Prerequisites

1. **Node.js**:
   - Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
   - Verify the installation by running:
     ```bash
     node -v
     npm -v
     ```

2. **Puppeteer**:
   - Puppeteer is a Node.js library that provides a high-level API to control Chrome or Chromium through the DevTools Protocol. It enables automation of browser tasks like web scraping, testing, and even game automation, as in this case.
   
   - Puppeteer launches a version of Chrome or Chromium in a controlled environment and allows you to simulate clicks, navigation, input, and more. It is useful for automating any browser interaction.


3. **Git** (optional but recommended):
   - If you plan to clone this project from a repository, you can download Git from [here](https://git-scm.com/).

## Installation

1. **Clone the Repository (optional)**:
   - If you're working with a repository hosted on platforms like GitHub, you can "clone" the repository to download all the project files to your local machine. This requires Git to be installed on your computer.
   
   - To clone the repository, open your terminal (or command prompt) and run the following commands:
     ```bash
     git clone https://github.com/rtb-12/Whack-A-Mole-HACK.git
     cd Whack-A-Mole-HACK
     ```
   - After running these commands, you'll have a local copy of the project and will navigate into the project's directory.

   **OR**

   - You can also download the project as a ZIP file if you prefer not to use Git. To do this:
     1. Visit the repository page in your browser.
     2. Look for a "Code" button or "Download ZIP" option.
     3. Download and extract the ZIP file to a folder on your machine.
   
   After downloading or cloning, navigate into the project folder using:
   ```bash
   cd Whack-A-Mole-HACK


2. **Install Dependencies**:
   - In the project directory, install the required Node.js dependencies:
     ```bash
     npm install puppeteer
     ```

## Running the Script

1. **Run the Script**:
   - Once the dependencies are installed, you can run the automation script using the following command:
     ```bash
     node whack-a-mole.js
     ```

2. **Game Will Launch**:
   - The script will open a browser and navigate to the Whack-A-Mole game. It will start clicking the moles as they pop up.

## How the Script Works

1. **Browser Automation**:
   - The script uses Puppeteer to control a browser and interact with the game hosted at [https://nikkuag.github.io/Wack-A-Mole/](https://nikkuag.github.io/Wack-A-Mole/).

2. **Clicking Moles**:
   - It detects the moles that appear by selecting the HTML elements with the class `.hole.up` and simulates a click on each detected mole.

3. **Looping**:
   - The script loops continuously to keep clicking moles as long as the game is running.

