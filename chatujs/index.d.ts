declare const team: string[];

declare function randomInt(lowerLimit: number, upperLimit: number): number;

declare function randomFloat(lowerLimit: number, upperLimit: number): number;

declare function randomChoice<T>(arr: T[]): T;

declare function randomId(): string;

export { team, randomInt, randomFloat, randomChoice, randomId };
export default team;
