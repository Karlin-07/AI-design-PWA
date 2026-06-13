const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const loadingText = document.getElementById('loadingText');
const resultImage = document.getElementById('resultImage');
const downloadLink = document.getElementById('downloadLink');
const historyGallery = document.getElementById('historyGallery');

// Load history from localStorage on page load
window.addEventListener('DOMContentLoaded', loadHistory);

generateBtn.addEventListener('click', handleGenerate);

async function handleGenerate() {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert('Please enter a design idea first!');
    return;
  }

  // Show loading state
  generateBtn.disabled = true;
  loadingText.classList.remove('hidden');
  resultImage.classList.add('hidden');
  downloadLink.classList.add('hidden');

  try {
    const imageUrl = await generateImage(prompt);

    showResult(imageUrl);
    saveToHistory(prompt, imageUrl);
  } catch (err) {
    console.error(err);
    alert('Something went wrong while generating the image: ' + err.message);
  } finally {
    generateBtn.disabled = false;
    loadingText.classList.add('hidden');
  }
}

// Generates an image using Puter.js (free, no API key needed)
async function generateImage(prompt) {
  // Using Flux Schnell - fast and good quality for design sketches
  const imgElement = await puter.ai.txt2img(prompt, {
    model: 'black-forest-labs/flux-schnell'
  });

  // imgElement is an <img> tag with the image data already loaded
  return imgElement.src;
}

function showResult(imageUrl) {
  resultImage.src = imageUrl;
  resultImage.classList.remove('hidden');

  downloadLink.href = imageUrl;
  downloadLink.classList.remove('hidden');
}

function saveToHistory(prompt, imageUrl) {
  const history = JSON.parse(localStorage.getItem('designHistory')) || [];
  history.unshift({ prompt, imageUrl, date: new Date().toISOString() });

  // Keep only the latest 20 items
  const trimmed = history.slice(0, 20);
  localStorage.setItem('designHistory', JSON.stringify(trimmed));

  renderHistory(trimmed);
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem('designHistory')) || [];
  renderHistory(history);
}

function renderHistory(history) {
  historyGallery.innerHTML = '';

  history.forEach((item) => {
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.prompt;
    img.title = item.prompt;

    img.addEventListener('click', () => {
      showResult(item.imageUrl);
      promptInput.value = item.prompt;
    });

    historyGallery.appendChild(img);
  });
}
