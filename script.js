const base = 100;
    document.getElementById('calc').onclick = () => {
      let price = base;
      price *= +document.getElementById('edu').value;
      price *= +document.getElementById('net').value;
      price += +document.getElementById('caste').value;

      document.querySelectorAll('.skill:checked').forEach(el => price += +el.value);
      document.querySelectorAll('input[name="age"]').forEach(r => { if (r.checked) price *= +r.value });

      document.querySelectorAll('.rep').forEach(el => {
        if (!el.checked) return;
        const c = el.getAttribute('data-coef');
        if (c) price *= +c;
        else price -= 20;
      });

      document.getElementById('result').textContent = `Price: $${price.toFixed(2)}`;
    }
