declare const team: string[];

declare function randomInt(lowerLimit: number, upperLimit: number): number;

declare function randomFloat(lowerLimit: number, upperLimit: number): number;

// declare function randomChoice<T>(arr: T[]): T;

declare function randomChoice(arr: any[]): any;

declare function randomId(): string;

declare function randomPassword(len: number): string;

declare function randomString(len: number): string;

declare function randomShuffle(arr: any[]): any;

export { team, randomInt, randomFloat, randomChoice, randomId, randomPassword, randomString, randomShuffle };
export default team;
