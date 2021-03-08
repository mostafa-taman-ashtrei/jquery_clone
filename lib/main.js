class NEOQUERY {
    $ (...args) {
        if (typeof args[0] === 'function'){
            const reayFunction = args[0]
            document.addEventListener('DOMContentLoaded', reayFunction);
        } else if (typeof args[0] === 'string') {
            const selector = args[0];
            const newElem = document.querySelectorAll(selector);
            this.makeCollection(newElem);
            return newElem;
        } else if (args[0] instanceof HTMLElement) {
            const newElem = [args[0]]
            this.makeCollection(newElem)
            return newElem
        } 
    }

    alert () {
        alert('This is an NQ alert');
    }


    makeCollection = (elements) => {
        elements.each = (callback) => {
            elements.forEach((element, i) => {
              const boundFn = callback.bind(element);
              boundFn(i, element);
            });
        };
    
        elements.text = (text) => elements[0].innerText = text;
    
        elements.on = (eventName, eventHandler) => {
            elements.forEach(e => {
                e.addEventListener(eventName, eventHandler);
            });
        };
    
        elements.css = (...cssArgs) => {
            if (typeof cssArgs[0] === 'string') {
              const [property, value] = cssArgs;
              elements.forEach((element) => {
                element.style[property] = value;
              });
            } else if (typeof cssArgs[0] === 'object') {
              const cssProps = Object.entries(cssArgs[0]);
              elements.forEach((element) => {
                cssProps.forEach(([property, value]) => {
                  element.style[property] = value;
                });
              });
            }
        };
    };

}