window.onload = function() {
  //1й шаг
  function step1() {
    // анимация волн
    anime({
      targets: 'g.step1 .water',
      d: [
        { value: 'M212.344 132.221L227 99.0001C227 99.0001 187.787 106.725 162.5 105.5C141.113 104.464 129.858 94.4753 108.5 96C101.007 96.5349 89.5 99.0001 89.5 99.0001L104.232 132.329C113.817 154.013 135.293 168 159 168C182.203 167.389 202.975 153.457 212.344 132.221Z'},
        { value: 'M212.344 132.221L227 99.0001C227 99.0001 206.787 106.725 181.5 105.5C160.113 104.464 145.813 89.2289 125.5 96C97 105.5 89.5 99.0001 89.5 99.0001L104.232 132.329C113.817 154.013 135.293 168 159 168C182.203 167.389 202.975 153.457 212.344 132.221Z'},
        { value: 'M212.344 132.221L227 99.0001C227 99.0001 222.787 106.725 197.5 105.5C176.113 104.464 174.813 89.2289 154.5 96C126 105.5 89.5 99.0001 89.5 99.0001L104.232 132.329C113.817 154.013 135.293 168 159 168C182.203 167.389 202.975 153.457 212.344 132.221Z'},
        { value: 'M212.344 132.221L227 99.0001C227 99.0001 230 99.0001 219.5 96.5C198.852 91.5837 190.813 94.2289 170.5 101C142 110.5 89.5 99.0001 89.5 99.0001L104.232 132.329C113.817 154.013 135.293 168 159 168C182.203 167.389 202.975 153.457 212.344 132.221Z'}
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 2000,
      loop: true
    });

    //анимация частиц воды
    const particles = document.querySelectorAll('g.step1 .particles');

    particles.forEach(element => {
      let x = element.getAttribute('x');
      const xRight = +x + 10;
      const xLeft = +x - 10;
      const delay = Math.floor(Math.random() * (3000 - 1000) + 1000);

      anime({
        targets: element,
        x: [
          { value: x},
          { value: xRight},
          { value: x},
          { value: xLeft},
        ],
        easing: 'linear',
        direction: 'alternate',
        duration: 5000,
        loop: true,
        delay: delay
      });
    });

    // анимация стрелочек
    let path = anime.path('g.pipe1 path');

    const arrows = document.querySelectorAll('div.pipe1 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })

  }
  
  step1();

  //2й шаг
  function step2() {
    //анимация вращения
    anime({
      targets: 'g.step2 .toggle',
      d: [
        { value: 'M322 64L329 71M341 83L348 90M348 64L341 71M329 83.0001L322 90.0001' },
        { value: 'M334.988 58.6153L334.995 68.5148M335.005 85.4853L335.012 95.3848M353.385 76.9884L343.485 76.9947M326.515 77.0054L316.615 77.0118' }
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 2000,
      loop: true,
    })

    // анимация стрелочек
    let path = anime.path('g.pipe2 path');

    const arrows = document.querySelectorAll('div.pipe2 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(800),

    })
  }
    
  step2();

  //3й шаг
  function step3() {
    //анимация частиц
    const particles = document.querySelectorAll('g.step3 .particles');

    particles.forEach(element => {
      let y = element.getAttribute('cy');
      const yTop = +y - 10;
      const duration = Math.floor(Math.random() * (5000 - 1000) + 1000);

      anime({
        targets: element,
        cy: [
          { value: y },
          { value: yTop }
        ],
        easing: 'linear',
        direction: 'alternate',
        duration: duration,
        loop: true,
      });
    });

    //анимация капель
    const drops = document.querySelectorAll('g.step3 .drop');

    drops.forEach(element => {
      let y = element.getAttribute('cy');
      const yTop = +y + 10;
      const delay = Math.floor(Math.random() * (3000 - 1000) + 1000);

      anime({
        targets: element,
        cy: [
          { value: y },
          { value: yTop },
        ],
        fill: [

          { value: '#1074b8'},
          { value: '#69cae1' }
        ],
        easing: 'linear',
        delay: delay,
        loop: true,
      });
    });

    // анимация стрелочек
    let path = anime.path('g.pipe3 path');

    const arrows = document.querySelectorAll('div.pipe3 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(800),

    })
  }

  step3();   

  function step4() {
    // анимация стрелочек
    let path = anime.path('g.pipe4 path');

    const arrows = document.querySelectorAll('div.pipe4 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(200),

    })
  }

  step4();

  function step5() {
    //анимация частиц воды
    const particles = document.querySelectorAll('g.step5 .particles');

    particles.forEach(element => {
      let x = element.getAttribute('x');
      const xRight = +x + 10;
      const xLeft = +x - 10;
      const delay = Math.floor(Math.random() * (3000 - 1000) + 1000);

      anime({
        targets: element,
        x: [
          { value: x},
          { value: xRight},
          { value: x},
          { value: xLeft},
        ],
        easing: 'linear',
        direction: 'alternate',
        duration: 5000,
        loop: true,
        delay: delay
      });
    });

    // анимация стрелочек
    let path = anime.path('g.pipe5 path');

    const arrows = document.querySelectorAll('div.pipe5 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })
  }


  step5();

  function step6() {
    //анимация вращения
    anime({
      targets: 'g.step6 .toggle',
      d: [
        { value: 'M562 386L569 393M581 405L588 412M588 386L581 393M569 405L562 412' },
        { value: 'M574.913 380.615L574.96 390.515M575.04 407.485L575.087 417.385M593.385 398.913L583.485 398.96M566.515 399.04L556.615 399.087' }
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 2000,
      loop: true,
    })

    // анимация стрелочек
    let path = anime.path('g.pipe6 path');

    const arrows = document.querySelectorAll('div.pipe6 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })
  }

  step6();

  function step7() {
    // анимация стрелочек
    let path = anime.path('g.pipe7 path');

    const arrows = document.querySelectorAll('div.pipe7 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })
  }

  step7();

  function step8_1() {
    // анимация стрелочек
    let path = anime.path('g.pipe8-1 path');

    const arrows = document.querySelectorAll('div.pipe8-1 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(800),

    })
  }

  step8_1();

  function step8_2() {
    // анимация стрелочек
    let path = anime.path('g.pipe8-2 path');

    const arrows = document.querySelectorAll('div.pipe8-2 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(800),

    })
  }

  step8_2();

  function step9() {
    //анимация капель
    const drops = document.querySelectorAll('g.step9 .drop');

    drops.forEach(element => {
      let y = element.getAttribute('cy');
      const yTop = +y + 25;
      const delay = Math.floor(Math.random() * (3000 - 1000) + 1000);

      anime({
        targets: element,
        cy: [
          { value: y },
          { value: yTop },
        ],
        fill: [
          { value: '#1074b8'}
        ],
        easing: 'linear',
        delay: delay,
        loop: true,
      });
    });
  }

  step9();

  function step10_1() {
    // анимация стрелочек
    let path = anime.path('g.pipe10-1 path');

    const arrows = document.querySelectorAll('div.pipe10-1 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(800),

    })
  }

  step10_1();

  function step10_2() {
    // анимация стрелочек
    let path = anime.path('g.pipe10-2 path');

    const arrows = document.querySelectorAll('div.pipe10-2 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(800),

    })
  }

  step10_2();

  function step10_3() {
    // анимация стрелочек
    let path = anime.path('g.pipe10-3 path');

    const arrows = document.querySelectorAll('div.pipe10-3 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })
  }

  step10_3()

  function step11() {
    //анимация вращения
    anime({
      targets: 'g.step11 .toggle',
      d: [
        { value: 'M646 671L653 678M665 690L672 697M672 671L665 678M653 690L646 697' },
        { value: 'M658.991 665.615L658.996 675.515M659.004 692.485L659.009 702.385M677.385 683.991L667.485 683.996M650.515 684.004L640.615 684.009' }
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 2000,
      loop: true,
    })

    // анимация стрелочек
    let path = anime.path('g.pipe11 path');

    const arrows = document.querySelectorAll('div.pipe11 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })
    
  }

  step11();

  function step12() {
    // анимация стрелочек
    let path = anime.path('g.pipe12 path');

    const arrows = document.querySelectorAll('div.pipe12 .arrow');

    anime({
      targets: arrows,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      opacity: [
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 1},
        {value: 0}
      ],
      easing: 'linear',
      duration: 2000,
      loop: true,
      delay: anime.stagger(500),

    })
    
  }

  step12();
}