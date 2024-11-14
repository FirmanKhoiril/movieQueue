# MovieQueue 🎬

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success)](https://moviequeue.vercel.app/)
[![GitHub License](https://img.shields.io/github/license/FirmanKhoiril/movieQueue)](https://github.com/FirmanKhoiril/movieQueue/blob/main/LICENSE)

MovieQueue is a user-friendly web application that allows users to explore, search, and save their favorite movies. It utilizes the TMDB API for fetching up-to-date movie details and ratings, creating an enjoyable browsing experience. Built with React, Tailwind CSS, and React Query, MovieQueue is fully responsive and optimized for a smooth user experience across devices.

## 🚀 Demo

Access the live site: [MovieQueue](https://moviequeue.vercel.app/)

Explore the GitHub repository: [GitHub - MovieQueue](https://github.com/FirmanKhoiril/movieQueue)

## 🛠 Features

- **Browse Popular Movies**: Explore trending movies based on popularity.
- **Search**: Search for specific movies with keywords.
- **Favorite List**: Save and view favorite movies for easy access.
- **Movie Details**: View movie ratings, release date, genre, synopsis, and cast details.
- **Responsive Design**: Adapted for seamless usage on desktop, tablet, and mobile devices.

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API
- **API**: TMDB API
- **Other Libraries**: 
  - React Query (for fetching and caching API data)
  - Moment.js (for date formatting)
  - React Icons (for intuitive icons)
  - React Router (for page routing)

## 📦 Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/FirmanKhoiril/movieQueue.git
    cd movieQueue
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your TMDB API key:
    ```bash
    REACT_APP_TMDB_API_KEY=your_api_key_here
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```
   Visit the app at `http://localhost:3000`.

## 🌟 Features Breakdown

### Home
The homepage displays trending movies based on popularity, using a carousel view. Users can browse through movies and select individual movies for more details.

### Movie Search
The search feature allows users to search for specific movies by name, providing relevant search results instantly.

### Favorite Movies
Users can add movies to their favorites, allowing quick access to preferred movies at any time.

### Movie Details Page
Detailed information on each movie, including synopsis, genres, rating, release date, and other relevant data.

## 🛠 Deployment

This project is deployed on [Vercel](https://vercel.com/). For your own deployment, connect your GitHub repository to Vercel, then follow the Vercel deployment instructions to automatically deploy every time you push changes to your main branch.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/FirmanKhoiril/movieQueue/blob/main/LICENSE) file for details.

## 🙌 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie data.
- [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component) for lazy-loading images, improving performance.
- [Moment.js](https://momentjs.com/) for date formatting.

## 📫 Contact

Created by [Firman Khoiril](https://github.com/FirmanKhoiril) - feel free to reach out!
