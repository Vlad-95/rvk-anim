window.onload = function() {

  //функция для частиц воды
  function particles(step, direction, range, speedMax, speedMin) {
    const particles = document.querySelectorAll(`g.step${step} .particles`);

    particles.forEach(element => {
      let param;
      let paramStart
      let paramRange;
      let duration = Math.floor(Math.random() * (speedMax - speedMin) + speedMin);
      let tag = element.tagName;
      if (direction == 'vertical') {
        if (tag == 'circle') {
          param = 'cy';          
        }

        if (tag == 'rect') {
          param = 'y';
        }
      }

      if (direction == 'horizontal') {
        if (tag == 'circle') {
          param = 'cx';
        }

        if (tag == 'rect') {
          param = 'x';
        }
      }

      paramStart = element.getAttribute(param);
      paramRange = +paramStart - range;

      anime({
        targets: element,
        [param]: [
          {value: paramStart},
          {value: paramRange}
        ],
        easing: 'linear',
        direction: 'alternate',
        duration: duration,
        loop: true
      })
      
    })
  }

  //функция для анимации стрелочек
  function arrows(pipeNumber, stagger) {
    let path = anime.path(`g.pipe${pipeNumber} path`);

    const arrows = document.querySelectorAll(`div.pipe${pipeNumber} .arrow`);

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
      duration: 5000,
      loop: true,
      delay: anime.stagger(stagger),
    })
  }
  
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
    particles('1', 'horizontal', 10, 7000, 4000)

    // анимация стрелочек
    arrows('1', 1000);
  }

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
    arrows('2', 2000);
  }

  //3й шаг
  function step3() {
    //анимация частиц
    particles('3', 'vertical', 10, 5000, 1000);

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
    arrows('3', 1500);
  } 

  function step4() {
    // анимация стрелочек
    arrows('4', 1000);
  }

  function step5() {
    //анимация частиц воды
    particles('5', 'horizontal', 10, 7000, 4000);    

    // анимация стрелочек
    arrows('5', 1000);
  }

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
    arrows('6', 1000);
  }

  function step7() {
    // анимация стрелочек
    arrows('7', 1000);
  }

  function step8_1() {
    // анимация стрелочек
    arrows('8-1', 1000);
  }

  function step8_2() {
    // анимация стрелочек
    arrows('8-2', 1000);
  }

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

  function step10_1() {
    // анимация стрелочек
    arrows('10-1', 2000);
  }

  function step10_2() {
    // анимация стрелочек
    arrows('10-2', 1500);
  }

  function step10_3() {
    // анимация стрелочек
    arrows('10-3', 1000);
  }

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
    arrows('11', 2000);    
  }

  function step12() {
    // анимация стрелочек
    arrows('12', 1500);    
  }

  function step13() {
    //анимация частиц
    particles('13', 'horizontal', 2, 1000, 500);

    // анимация стрелочек
    arrows('13', 1500);
  }

  function step14() {
    // анимация стрелочек
    arrows('14', 1500);
  }

  function step15() {
    //анимация частиц
    particles('15', 'vertical', 10, 5000, 1000);

    // анимация стрелочек
    arrows('15', 1500); 
  }

  function step16() {
    // анимация стрелочек
    arrows('16', 1500); 
  }

  function step17() {
    // анимация стрелочек
    arrows('17', 1000); 
 
  }

  function step18() {
    //анимация частиц
    particles('18', 'horizontal', 10, 5000, 1000);

    // анимация волн
    anime({
      targets: 'g.step18 .water',
      d: [
        { value: 'M636.836 1110.59L651.492 1077.36C651.492 1077.36 626.739 1079.86 615.992 1080.86C599.992 1082.36 562.253 1088.72 542.992 1079.36C525.492 1070.86 513.992 1077.36 513.992 1077.36L528.725 1110.69C538.31 1132.38 559.785 1146.36 583.492 1146.36C606.695 1145.75 627.467 1131.82 636.836 1110.59Z'},
        { value: 'M636.836 1110.59L651.492 1077.36C651.492 1077.36 643.992 1079.36 627.992 1080.86C611.992 1082.36 589.996 1079.53 568.992 1075.36C547.989 1071.2 513.992 1077.36 513.992 1077.36L528.725 1110.69C538.31 1132.38 559.785 1146.36 583.492 1146.36C606.695 1145.75 627.467 1131.82 636.836 1110.59Z'},
        { value: 'M636.836 1110.59L651.492 1077.36C651.492 1077.36 643.462 1085.21 627.992 1080.86C611.992 1076.36 598.484 1068.36 576.992 1075.36C555.5 1082.36 513.992 1077.36 513.992 1077.36L528.725 1110.69C538.31 1132.38 559.785 1146.36 583.492 1146.36C606.695 1145.75 627.467 1131.82 636.836 1110.59Z'},
        { value: 'M636.836 1110.59L651.492 1077.36C651.492 1077.36 646.5 1073.36 637 1073.36C617.508 1073.36 618.485 1072.36 596.992 1081.36C575.5 1090.36 513.992 1077.36 513.992 1077.36L528.725 1110.69C538.31 1132.38 559.785 1146.36 583.492 1146.36C606.695 1145.75 627.467 1131.82 636.836 1110.59Z'},
        
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 2000,
      loop: true
    });
  }


  step1();
  step2();
  step3();  
  step4();
  step5();
  step6();
  step7();
  step8_1();
  step8_2();
  step9();
  step10_1();
  step10_2();
  step10_3()
  step11();
  step12();
  step13();
  step14();
  step15();
  step16();
  step17();
  step18();
}