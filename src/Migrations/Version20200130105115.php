<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200130105115 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE schedules (id INT AUTO_INCREMENT NOT NULL, dojo_id INT NOT NULL, course_id INT DEFAULT NULL, day VARCHAR(15) NOT NULL, time_begin VARCHAR(20) NOT NULL, time_end VARCHAR(20) NOT NULL, group_level VARCHAR(255) NOT NULL, INDEX IDX_313BDC8E32F09E9C (dojo_id), INDEX IDX_313BDC8E591CC992 (course_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE schedules ADD CONSTRAINT FK_313BDC8E32F09E9C FOREIGN KEY (dojo_id) REFERENCES dojo (id)');
        $this->addSql('ALTER TABLE schedules ADD CONSTRAINT FK_313BDC8E591CC992 FOREIGN KEY (course_id) REFERENCES course (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE schedules');
    }
}
