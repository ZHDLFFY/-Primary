export class Student {
    constructor(
        private name: string,
        public gender: string,
        public subject: string,
        public Fraction: number,
        public classes: number,
    ) {

    }
}

export const All_stu: Student[] = [
    new Student('Hvxz', '1', 'web前端', 93, 1702),
    new Student('Zbas', '0', 'zigbee', 75, 1702),
    new Student('Knc', '1', 'java语言', 85, 1702),
    new Student('Ling', '0', '人工智能', 89, 1702),
    new Student('Plck', '1', '数据结构', 70, 1702),
    new Student('Calck', '0', '嵌入式', 58, 1702),
]