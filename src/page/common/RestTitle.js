/**
 * Created by gaochao on 6/9/17.
 */
var reSetTitleUtil = {
  reSetTitle: function (title) {
    document.title = title;    // hack在微信等webview中无法修改document.title的情况
    var mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
      var iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.setAttribute('src', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABMAEwDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAYEBQECBwMI/8QAKhAAAgIBAwMEAQQDAAAAAAAAAQIAAwQFESESMVEGE0FxIhRCYaFDgZH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAJxEAAQMDAwQBBQAAAAAAAAAAAAECAwQREgUhQRMxUfBxBiIyodH/2gAMAwEAAhEDEQA/APqmEJD1HNTEqLMefgQCTbalS7uwAlVla7j0nZT1HtxF/PzbsokliB8ASEKbMhdq1Yn6+ZNrOXLY8eo1RyO6dMzJf0X9nqXp/wAZ232npV6kr49xSBKU6Pl2KNq9uQefueGTpuVWVLVHpB3JEtRkK7ZGB9dq8f3rCip74W47YmpY+SB0ON/Emg79pzEW2V3gIxUrySIzaJrvU60ZLDqPY+ZySncxMk3Q06dr0NW/oyJg/wALz74GiEwrBlBHaZlB7xpdYKq2Y9hE3UMpsrIZiT09ll/6huKY3QO7cRarT3LFQDljtIOdZbFM7HPbgnJK0vTWy7NzxUO8acbDqx0CogG0MGhaMdFUbbCSJP5OxQshbi1A2HgTVkVhswBm0ILSj1jRa70L0jpsHiJb1tiWMLTtYDyTxOoRR9XYSIy5IUccE7TTSy4OxXsp839Q6W2ohWpjS0jN9uUT3Yn+l9S/VUe25PWvnjcS/nOtCyzVqNfSG6WOxJG06Ih6lB8yFRF0pFanY26HXrXUjZH/AJJsvyn9TcX/AFKT11iV+lDqzq9x/MtfUdZKo/wDKjCf2sqtvjeZVbd1z2L7DmOwhNa2DICPE2lhwIQhACVPqWv3NOcbbnbiW0qPUNoFAT5Jgi5qParXdlEvGqvXIrJpcAMOd14/udGxeaE+on0KXuRR8mOVI6alH8SySV0q5PMVBp0GnsWOC9lW+63I+p0e/jMvztFNgVYg8ER3I3EoNZwCGNtQ+xKzeSNGzhZWKrDs4/uW8SFYowZSQw+Za4msPWAtw3HkQBihKxdZxyOTtPK7WqwD7YLGAWl9q0oWYgbRU1DJOVeW/aOBDMzLco/mdl8CeeNQ+RYEQfZ8QCbomObcjrI/FYzCR8HGXGpCqJIgBMMoYbEcTMIBT5+krYS9X4tKe7DvqJDISPIjhMFVbuAYAklGHdW/5Nlpsc7KjH/UcTRWe6CZWpF7KIAuYulW2kGz8Vl9iYleMgCASR2hACEIQD//2Q==');
      var iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback);
          document.body.removeChild(iframe);
        }, 0);
      };
      iframe.addEventListener('load', iframeCallback);
      document.body.appendChild(iframe);
    }
  }
};
export default reSetTitleUtil;
