window.onload = function() {

    // анимация волн
    anime({
        targets: '.water',
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
    const particles = document.querySelectorAll('.particles');

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

    //анимация стрелочек
    let path1 = anime.path('g.pipe1 path');
    let path2 = anime.path('g.pipe2 path');

    anime({
      targets: '.pipe1.arrow1',
      translateX: path1('x'),
      translateY: path1('y'),
      rotate: path1('angle'),
      easing: 'linear',
      duration: 2000,
      direction: 'reverse',
      loop: true
    });

    anime({
      targets: '.pipe2.arrow1',
      translateX: path2('x'),
      translateY: path2('y'),
      rotate: path2('angle'),
      easing: 'linear',
      duration: 2000,
      
      loop: true
    });
}



