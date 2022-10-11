const buttons = document.querySelectorAll('.pset')
let object = {}

buttons.forEach(i => {
    i.setAttribute('shouldShow', '0')
    i.onclick = event => {
        let j = i.getAttribute('shouldShow')
        if(j == '0')
        {
            i.setAttribute('shouldShow', '1')
        }
        else
        {
            i.setAttribute('shouldShow', '0')
        }
    }
});