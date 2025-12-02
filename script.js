// Simple modal + form prefill
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('quoteModal');
  const productField = document.getElementById('productField');
  document.querySelectorAll('[data-open="quote"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const p = btn.getAttribute('data-product') || '';
      if(productField) productField.value = p;
      modal.setAttribute('aria-hidden','false');
    });
  });
  document.querySelectorAll('[data-close="quote"]').forEach(btn=>{
    btn.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  });
  // close on outside click
  modal.addEventListener('click', (e)=>{
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });
});
