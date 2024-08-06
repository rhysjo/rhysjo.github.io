function aboutContentCollapse(){
        const buttons = document.querySelectorAll('.collapsible-btn');
        const contents = document.querySelectorAll('.collapsible-content');

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                const content = contents[index];
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.padding = "0 0";
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
}

aboutContentCollapse();






