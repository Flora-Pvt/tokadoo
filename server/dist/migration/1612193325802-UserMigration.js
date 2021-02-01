"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1612193325802 = void 0;
class UserMigration1612193325802 {
    constructor() {
        this.name = 'UserMigration1612193325802';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NOT NULL");
    }
}
exports.UserMigration1612193325802 = UserMigration1612193325802;
//# sourceMappingURL=1612193325802-UserMigration.js.map