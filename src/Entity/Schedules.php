<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SchedulesRepository")
 */
class Schedules
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $day;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $timeBegin;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $timeEnd;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $groupLevel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Dojo", inversedBy="schedules")
     * @ORM\JoinColumn(nullable=false)
     */
    private $dojo;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Course", inversedBy="schedules")
     */
    private $course;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?string
    {
        return $this->day;
    }

    public function setDay(string $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getTimeBegin(): ?string
    {
        return $this->timeBegin;
    }

    public function setTimeBegin(string $timeBegin): self
    {
        $this->timeBegin = $timeBegin;

        return $this;
    }

    public function getTimeEnd(): ?string
    {
        return $this->timeEnd;
    }

    public function setTimeEnd(string $timeEnd): self
    {
        $this->timeEnd = $timeEnd;

        return $this;
    }

    public function getGroupLevel(): ?string
    {
        return $this->groupLevel;
    }

    public function setGroupLevel(string $groupLevel): self
    {
        $this->groupLevel = $groupLevel;

        return $this;
    }

    public function getDojo(): ?Dojo
    {
        return $this->dojo;
    }

    public function setDojo(?Dojo $dojo): self
    {
        $this->dojo = $dojo;

        return $this;
    }

    public function getCourse(): ?Course
    {
        return $this->course;
    }

    public function setCourse(?Course $course): self
    {
        $this->course = $course;

        return $this;
    }
}
