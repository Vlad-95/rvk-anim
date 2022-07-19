window.onload = function() {
    anime({
        targets: '.water',
        d: [
          { value: 'M169.169 99.629L182 69C172.109 75.7006 159.889 78.0193 148.231 75.4078L119.724 69.0221C109.426 66.7155 98.701 67.1861 88.6453 70.3856L77.0597 74.0719C66.331 77.4856 54.6189 75.6034 45.5 69.0001L57.5461 99.628C66.568 122.567 88.7069 137.649 113.356 137.649C138.006 137.649 160.145 122.567 169.169 99.629Z'},
          { value: 'M169.169 99.629L182 69C171.977 64.1501 160.584 62.92 149.756 65.5185L123.748 71.7604C110.81 74.8656 97.2833 74.5156 84.5231 70.7455L74.8725 67.8942C65.2238 65.0435 54.907 65.4319 45.5 69.0001L57.5461 99.628C66.568 122.567 88.7069 137.649 113.356 137.649C138.006 137.649 160.145 122.567 169.169 99.629Z'},
          { value: 'M169.169 99.629L182 69C172.109 75.7006 159.889 78.0193 148.231 75.4078L119.724 69.0221C109.426 66.7155 98.701 67.1861 88.6453 70.3856L77.0597 74.0719C66.331 77.4856 54.6189 75.6034 45.5 69.0001L57.5461 99.628C66.568 122.567 88.7069 137.649 113.356 137.649C138.006 137.649 160.145 122.567 169.169 99.629Z'},
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
    });

    anime({
        targets: '.particals',
        x: [
          { value: '100'},
          { value: '120'},
          { value: '80'},
          { value: '100'},
        ],
        easing: 'easeOutQuad',
        duration: 5000,
        loop: true
    });
}

