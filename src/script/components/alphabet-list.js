class AlphabetList extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  get value() {
    return this._value
  }

  render() {
    const alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]

    this.innerHTML = ''
    alphabet.forEach(abj => {
      this.innerHTML += `<span class="bg-white rounded alphabet-item text-center">${abj}</span>`
    })

    this.innerHTML += `<style>
          .alphabet-item{
              cursor:pointer;
              height:38px;
              width: 38px;
              line-height:35px;
              user-select: none;
          }

          .alphabet-item:hover{
            background-color:#FFBB69 !important;
            color:#f1f1f1;
          }
      </style>`

    this._setItem()
  }

  static disableItem(item) {
    item.classList.remove('text-white')
    item.classList.remove('bg-primary')
    item.classList.add('bg-white')
  }

  static activeItem(item) {
    item.classList.add('bg-primary')
    item.classList.add('text-white')
    item.classList.remove('bg-white')
  }

  _setItem() {
    const alphabetItemElement = this.querySelectorAll('.alphabet-item')

    AlphabetList.activeItem(alphabetItemElement[0])
    this._value = alphabetItemElement[0].textContent

    alphabetItemElement.forEach(item => {
      item.addEventListener('click', () => {
        AlphabetList.activeItem(item)
        this._value = item.textContent

        alphabetItemElement.forEach(aItem => {
          if (item !== aItem) {
            AlphabetList.disableItem(aItem)
          }
        })
      })
      item.addEventListener('click', this._clickEvent)
    })
  }
}

customElements.define('alphabet-list', AlphabetList)
