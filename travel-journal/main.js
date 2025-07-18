import cardData from "./memories.mjs";

const mainContent = document.querySelector('main.content');

function filterMemories(query) {
    query = query.toLowerCase();
    return cardData.filter(memory => {
        const locationMatch = memory.location.toLowerCase().includes(query);
        const tagMatch = memory.tags.toLowerCase().includes(query);
        const dateMatch = memory.date.toLowerCase().includes(query);
        const titleMatch = memory.cardTitle.toLowerCase().includes(query);
        return locationMatch || tagMatch || dateMatch || titleMatch;
    });
}

function renderMemories(memories = cardData) {
    clearOldMemories();
    const noneFound = document.getElementById('none-found');
    if (memories.length === 0) {
        if (noneFound) noneFound.style.display = 'block';
        return;
    } else {
        if (noneFound) noneFound.style.display = 'none';
    }
    const hr = mainContent.querySelector('hr');
    let insertAfter = hr;
    memories.forEach((memory, groupIdx) => {
        const card = document.createElement('div');
        card.classList.add('memories');
        let currentImgIdx = 0;
        const imagesDiv = document.createElement('div');
        imagesDiv.classList.add('memory-images');
        const img = document.createElement('img');
        img.src = memory.photos[0].src;
        img.alt = memory.photos[0].alt;
        imagesDiv.appendChild(img);
        const arrowOverlay = document.createElement('div');
        arrowOverlay.className = 'card-arrow-overlay';
        const leftArrow = document.createElement('button');
        leftArrow.className = 'card-arrow card-arrow-left';
        leftArrow.setAttribute('aria-label', 'Show previous image');
        leftArrow.type = 'button';
        leftArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`;
        const rightArrow = document.createElement('button');
        rightArrow.className = 'card-arrow card-arrow-right';
        rightArrow.setAttribute('aria-label', 'Show next image');
        rightArrow.type = 'button';
        rightArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
        arrowOverlay.appendChild(leftArrow);
        arrowOverlay.appendChild(rightArrow);
        imagesDiv.appendChild(arrowOverlay);
        leftArrow.addEventListener('click', e => {
            e.stopPropagation();
            currentImgIdx = (currentImgIdx - 1 + memory.photos.length) % memory.photos.length;
            img.src = memory.photos[currentImgIdx].src;
            img.alt = memory.photos[currentImgIdx].alt;
        });
        rightArrow.addEventListener('click', e => {
            e.stopPropagation();
            currentImgIdx = (currentImgIdx + 1) % memory.photos.length;
            img.src = memory.photos[currentImgIdx].src;
            img.alt = memory.photos[currentImgIdx].alt;
        });
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('memory-info');
        infoDiv.innerHTML = `
            <h2>${memory.cardTitle}</h2>
            <p><strong>Date:</strong> ${memory.date}</p>
            <p><strong>Location:</strong> ${memory.location}</p>
            <p>${memory.description}</p>
        `;
        card.appendChild(imagesDiv);
        card.appendChild(infoDiv);
        if (insertAfter && insertAfter.parentNode) {
            insertAfter.parentNode.insertBefore(card, insertAfter.nextSibling);
            insertAfter = card;
        } else {
            mainContent.appendChild(card);
            insertAfter = card;
        }
    });
}

function clearOldMemories() {
    document.querySelectorAll('.memories').forEach(el => el.remove());
}

function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector('#search-input');
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        renderMemories();
    } else {
        const results = filterMemories(query);
        renderMemories(results);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const noneFound = document.getElementById('none-found');
    if (noneFound) noneFound.style.display = 'none';
    const form = document.querySelector('.search');
    if (form) {
        form.addEventListener('submit', searchHandler);
    }
    renderMemories();
});
