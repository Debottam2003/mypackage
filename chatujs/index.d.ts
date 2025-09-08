declare const team: string[];

declare function randomInt(upperLimit: number): number;

declare function randomChoice<T>(arr: T[]): T;

export { team, randomInt, randomChoice };
export default team;
