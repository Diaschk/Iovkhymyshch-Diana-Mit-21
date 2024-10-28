const checkboxes = document.querySelectorAll('#crypto-list1 input[type="checkbox"]');
const minusIcon = document.querySelector('.icon.minus');

function updateMinusIcon() {
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    minusIcon.style.display = checkedCount === 2 ? 'inline' : 'none';
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateMinusIcon);
});
