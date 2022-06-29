export const getEnvironments = () => {
    
    const variables = import.meta.env;

    return {
        ...variables
    }
}