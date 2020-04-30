export function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const addDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return addDescriptor;
}
//# sourceMappingURL=autobind.js.map