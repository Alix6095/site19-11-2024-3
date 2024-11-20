// Function to get the YouTube thumbnail
function getThumbnail() {
    var url = document.getElementById('youtubeUrl').value;

    // Check if the URL is valid
    if (url.includes("youtube.com/watch?v=")) {
        // Extract the video ID from the URL
        var videoId = url.split('v=')[1].split('&')[0];
        var thumbnailUrl = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";

        // Display the thumbnail
        document.getElementById('thumbnail').style.display = 'block';
        document.getElementById('thumbnailImage').src = thumbnailUrl;
    } else {
        alert("Please enter a valid YouTube URL.");
    }
}
