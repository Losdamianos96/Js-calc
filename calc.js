$('document').ready(function(){

    $('.calc-form').on('submit', function () {

        let energy = document.getElementById("energy").value;
        energy = parseFloat(energy)
        energy *= 1.2
        let direction = document.querySelector('input[name="direction"]:checked').value;

        if (direction === 'south') {

            document.getElementById('output-val').innerText = energy.toString();

        } else if (direction === 'eastwest') {

            energy *= 1.2;
            document.getElementById('output-val').innerText = energy.toString();

        }
        return false
    })
});