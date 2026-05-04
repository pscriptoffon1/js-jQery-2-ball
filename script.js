$(document).ready(function () {

    function moveStairs() {
        $(".stairs").animate(
            { top: "+=260" },
            2720,
            "linear",
            function () {
                $(this).css("top", "-140px");
                moveStairs();
            }
        );
    }

    let stepIndex = 0;

    const steps = [
        { top: 520, left: 100 },
        { top: 480, left: 85 }
    ];

    function ballMove() {

        let target = steps[stepIndex];

        $(".ball-container").animate(
            {
                top: target.top,
                left: target.left
            },
            500,
            function () {

                stepIndex++;

                if (stepIndex >= steps.length) {
                    stepIndex = 0; 
                }

                ballMove();
            }
        );
    }

    function shadowPulse() {
        $(".shadow").animate(
            { opacity: 0.2 },
            {
                duration: 500,
                complete: function () {
                    $(this).animate(
                        { opacity: 1 },
                        {
                            duration: 500,
                            complete: shadowPulse
                        }
                    );
                }
            }
        );
    }

    moveStairs();
    ballMove();
    shadowPulse();

});