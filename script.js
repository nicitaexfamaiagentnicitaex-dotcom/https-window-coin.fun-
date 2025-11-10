(function(){
    // Ждем загрузки DOM
    function init() {
      const addrWrap = document.getElementById('tokenAddress');
      const addrValueEl = document.getElementById('tokenValue');
      const copiedTag = document.getElementById('copiedTag');
      
      if (!addrWrap || !addrValueEl || !copiedTag) {
        console.error('Elements not found');
        return;
      }
      
      let addrValue = '';
      if (typeof window !== 'undefined' && window.WINDOW_TOKEN_VALUE) {
        addrValue = String(window.WINDOW_TOKEN_VALUE).trim();
        addrValueEl.textContent = addrValue;
      } else {
        addrValue = addrValueEl.textContent.trim();
      }
    
      async function copyText(text){
        // modern API
        if (navigator.clipboard && navigator.clipboard.writeText) {
          try { 
            await navigator.clipboard.writeText(text); 
            return true; 
          }
          catch(e){ 
            console.error('Clipboard API failed:', e);
            /* fallback below */ 
          }
        }
        // fallback for older browsers
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          return true;
        } catch(e) { 
          console.error('Fallback copy failed:', e);
          return false; 
        }
      }
    
      function flashCopied(){
        copiedTag.classList.add('show');
        setTimeout(()=> copiedTag.classList.remove('show'), 1200);
      }
    
      addrWrap.addEventListener('click', async (e) => {
        e.preventDefault();
        const ok = await copyText(addrValue);
        if (ok) flashCopied();
      });
    
      // keyboard accessibility: Enter / Space
      addrWrap.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const ok = await copyText(addrValue);
          if (ok) flashCopied();
        }
      });
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
})();
  
  