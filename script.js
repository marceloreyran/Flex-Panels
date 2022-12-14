const panels = Array.from(document.querySelectorAll('.panel'));

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(event) {
      if(event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.map(panel => panel.addEventListener('click', toggleOpen));
    panels.map(panel => panel.addEventListener('transitionend', toggleActive));