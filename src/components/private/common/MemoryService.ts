export const MemoryService = new class MemoryService {
    private innerMAp: Map<string, any> = new Map<string, any>();
    constructor() {
        console.log("MemoryService instantiated");
    }

};