var currentGalleryIndex = -1;

function getGalleryItems() {
	return Array.from(document.querySelectorAll('.gallery-item'));
}

function showPhotoAt(index) {
	var items = getGalleryItems();
	if (items.length === 0) return;
	index = ((index % items.length) + items.length) % items.length;
	currentGalleryIndex = index;

	var el = items[index];
	var modal = document.getElementById('photo-modal');
	if (!modal) return;
	modal.querySelector('img').src = el.dataset.src;
	modal.querySelector('.photo-modal-name').textContent = 'Image Credit: ' + el.dataset.name;
	var aiTag = modal.querySelector('.photo-modal-ai-tag');
	aiTag.style.display = el.dataset.ai === 'true' ? 'inline-block' : 'none';
	modal.classList.add('is-active');
}

function openPhotoModal(el) {
	var items = getGalleryItems();
	showPhotoAt(items.indexOf(el));
}

function navigatePhoto(delta) {
	showPhotoAt(currentGalleryIndex + delta);
}

function closePhotoModal() {
	var modal = document.getElementById('photo-modal');
	if (!modal) return;
	modal.classList.remove('is-active');
}

document.addEventListener('keydown', function(event) {
	var modal = document.getElementById('photo-modal');
	if (!modal || !modal.classList.contains('is-active')) return;

	if (event.key === 'Escape') {
		closePhotoModal();
	} else if (event.key === 'ArrowLeft') {
		navigatePhoto(-1);
	} else if (event.key === 'ArrowRight') {
		navigatePhoto(1);
	}
});
