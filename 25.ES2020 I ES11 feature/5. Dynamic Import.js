// Dynamic Import

// one way:
(async function() {
    const { add } =  await import ('./utils.js');
    const { remove } =  await import ('./utils.js');
    
    add();
    remove();
})(); // IIFE


// traditiona way:
import('./utils.js')
    .then(({add, remove}) => {
        add();
        remove();
    });

