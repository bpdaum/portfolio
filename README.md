# Brian Daum - Data Science Portfolio

Welcome to the repository for my personal Data Science portfolio website. This site showcases my projects, skills, and experience as a Data Scientist at Google.

## Live Demo
[Insert Live Link Here] *(e.g., GitHub Pages link)*

## Features

*   **Responsive Design**: Modern, mobile-first layout built with vanilla CSS (Flexbox/Grid).
*   **Dark Mode**: Fully functional dark/light theme toggle with persistence (saved in local storage).
*   **Interactive UI**: Animated text headers, smooth scrolling, and hover effects.
*   **Data Science Notebooks**: Includes full Jupyter Notebook source code for featured projects.

## Tech Stack

*   **Frontend**: HTML5, CSS3 (Custom Properties for theming), JavaScript (ES6+).
*   **Data Science**: Python, Pandas, XGBoost, Scikit-Learn, Pybaseball.

## Featured Project: Hall of Fame Prediction

One of the highlight projects included in this repo is a machine learning model to predict Baseball Hall of Fame inductees.

*   **Notebook**: [`assets/code/baseball_hof_prediction.ipynb`](assets/code/baseball_hof_prediction.ipynb)
*   **Goal**: Predict future HOF inductees using XGBoost based on career stats.
*   **Data Source**: FanGraphs (via `pybaseball`) aggregated by decade to ensure robust data retrieval.

## Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/bpdaum/portfolio.git
    cd portfolio
    ```

2.  **View the Website**:
    Simply open `index.html` in your web browser.

3.  **Run the Notebook**:
    Ensure you have Python installed, then install the dependencies:
    ```bash
    pip install pandas numpy xgboost scikit-learn pybaseball matplotlib seaborn
    ```
    Launch the notebook:
    ```bash
    jupyter notebook assets/code/baseball_hof_prediction.ipynb
    ```

## License
[MIT](https://choosealicense.com/licenses/mit/)
