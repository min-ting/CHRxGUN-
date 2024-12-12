// 간단한 게임 로직 예시
document.addEventListener('DOMContentLoaded', () => {
    const fruit1 = document.getElementById('fruit1');
    const fruit2 = document.getElementById('fruit2');

    // 예: 과일을 움직이는 간단한 애니메이션
    let position = 0;
    setInterval(() => {
        position += 5;
        fruit1.style.left = `${position}px`;
        if (position > window.innerWidth) {
            position = -100;
        }
    }, 100);
});
