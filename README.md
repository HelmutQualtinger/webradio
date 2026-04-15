# WebRadio — Sci-Fi Shortwave Aesthetic

A retro-futuristic web radio receiver with a high-fidelity sci-fi aesthetic. This project features a distinctive digital UI, an interactive global map with custom diamond-shaped pins for station discovery, and support for a wide range of international radio streams.

![WebRadio Screenshot Placeholder](screenshot.png)
*(Note: Replace 'screenshot.png' with an actual screenshot of your application)*

## Features

*   **Authentic Sci-Fi Aesthetic:** Implemented with custom CSS, featuring a dark digital interface, neon accents, scanlines, retro-futuristic fonts, and a distinctive color palette.
*   **Interactive Global Map:** Discover radio stations worldwide using Leaflet.js. Features custom, diamond-shaped map pins with accurate geographic placement. Markers are grouped to prevent overlap.
*   **Extensive Station Library:** Browse and stream a diverse collection of international radio stations, including a curated selection from Germany (Bavarian BR suite), Austria, Switzerland, France, Italy, Turkey, and more.
*   **Real-time Metadata:** Displays "Now Playing" information for supported streams, leveraging Radio France's API and ICY metadata.
*   **High-Quality Streaming:** Supports both standard MP3 streams and HLS (.m3u8) adaptive bitrate streams.
*   **Functional Player Controls:** Includes volume adjustment, station search, and a real-time UTC clock.
*   **Custom Station Logos:** Fetches and displays station logos where available, with a fallback.
*   **Calculated Frequencies:** Displays shortwave-style frequencies derived from station names.

## Technologies Used

*   **HTML5 & CSS3:** For structuring the application and styling its unique retro sci-fi look.
*   **Vanilla JavaScript:** For core application logic, station management, playback, and UI interactions.
*   **Leaflet.js:** Powers the interactive world map for station discovery.
*   **Hls.js:** Enables playback of HLS (HTTP Live Streaming) audio streams.
*   **Radio France API:** Used for fetching "Now Playing" metadata for specific stations.

## How to Run

Simply open the `index.html` file in any modern web browser. No server or complex setup is required, as this is a client-side application.

## Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## License

This project is open source.
