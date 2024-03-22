$(function() {
    $('#draggable-ottoman').draggable();
    $('#draggable-stool').draggable();
});

document.getElementById('save-page-btn').addEventListener('click', function() {
    html2canvas(document.body).then(function(canvas) {
        canvas.toBlob(function(blob) {
            saveAs(blob, "page-screenshot.jpeg");
        }, 'image/jpeg');
    });
});