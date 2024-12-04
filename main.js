$(document).ready(function () {
    const numCandles = 1; // Количество свечей
    let blownCandles = 0;  // Счетчик задутых свечей

    // Создаем свечи и добавляем их в контейнер
    for (let i = 0; i < numCandles; i++) {
        $("#candles-container").append(`
            <div class="candle">
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div id="top">
                    <div class="smoke"></div>
                    <div class="smoke"></div>
                    <div class="smoke"></div>
                    <div id="knot"></div>
                    <div class="burn" id="flame"></div>
                </div>
            </div>
        `);
    }

    // Логика задувания свечей
    $(".burn").on("click", function () {
        if (!$(this).hasClass("puff")) {
            $(this).removeClass("burn").addClass("puff");
            $(this).siblings(".smoke").each(function () {
                $(this).addClass("puff-bubble");
            });

            blownCandles++;
            if (blownCandles === numCandles) {
                $("h1").hide().html("Happy Birthday! I wish that each day brings you joy and bright experiences. May your life be filled with delightful surprises, true friends, and exciting adventures. Follow your dreams and never be afraid to listen to your heart! Congratulations!").fadeIn(500);
                
                // Запускаем анимацию звезд
                launchStars();
            }
        }
    });

    // Функция для запуска анимации звезд
    function launchStars() {
        const starContainer = $("<div id='stars'></div>").appendTo("body");
        
        // Создаем 100 случайных звезд
        for (let i = 0; i < 100; i++) {
            const size = Math.random() * 3 + 2; // Размер звезд
            const duration = Math.random() * 3 + 4; // Время анимации
            const delay = Math.random() * 3; // Задержка

            $("<div class='star'></div>").appendTo(starContainer)
                .css({
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', // Это делает звезды четырехугольными
                    opacity: 0,
                    animation: `starAnimation ${duration}s ease-in-out ${delay}s infinite`
                });
        }

       
    }
});
