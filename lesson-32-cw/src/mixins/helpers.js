let helpers= {
    directives: {
        neonText: {
            bind(el, binding) {
                el.style.color = binding.arg;
                el.style.textShadow = `0 0 9px ${binding.value}, 0 0 15px ${binding.value}, 0 0 5px ${binding.value}`;
            }
        }
        // neonText(el, binding) {
        //         el.style.color = binding.arg;
        //         el.style.textShadow = `0 0 9px ${binding.value}, 0 0 15px ${binding.value}, 0 0 5px ${binding.value}`;
        // }
    },
    filters: {
        readMore(text, length, suffix) {
            return text.length <= length ? text : text.substring(0, length) + suffix;
        }
    }
};

export default helpers;