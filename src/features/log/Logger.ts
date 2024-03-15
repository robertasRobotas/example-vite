export class Logger {
    private static logArray: string[]=[];
  
    private constructor() {
    }
  
    static log(message: string): void {
      Logger.logArray.push(message);
      console.log(message);
    }
  
    static getLogs(): string[] {
      return Logger.logArray;
    }
}