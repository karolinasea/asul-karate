<?php

namespace App\Controller;

use App\Entity\Dojo;
use App\Entity\HomePageText;
use App\Entity\Professor;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        $txt = $this->getDoctrine()
            ->getRepository(HomePageText::class)
            ->findAll();

        if (!$txt) {
            throw $this->createNotFoundException(
                'NOTHING'
            );
        }

//        return new Response('Check out this great product: '.$product->getName());

        // or render a template
        // in the template, print things with {{ product.name }}
         return $this->render('home/index.html.twig', ['txt' => $txt]);

//        return $this->render('home/index.html.twig', [
//            'controller_name' => 'MainController',
//        ]);
    }

    /**
     * @Route("/info", name="info")
     */
    public function info()
    {
        $prof = $this->getDoctrine()
            ->getRepository(Professor::class)
            ->findAll();

        if (!$prof) {
            throw $this->createNotFoundException(
                'NOTHING'
            );
        }

        $dojo = $this->getDoctrine()
            ->getRepository(Dojo::class)
            ->findAll();

        if (!$dojo) {
            throw $this->createNotFoundException(
                'NOTHING'
            );
        }

//        return new Response('Check out this great product: '.$product->getName());
        // or render a template in the template, print things with {{ product.name }}
        return $this->render('info/index.html.twig', ['prof' => $prof, 'dojo' => $dojo,]);
//        ['array' => ['dojo' => $dojo], ['prof' => $prof]]
//        array('dojo' => $dojo, 'prof' => $prof)
//        return $this->render('info/index.html.twig');
    }

    /**
     * @Route("/schedules", name="schedules")
     */
    public function schedules()
    {
        return $this->render('schedules/index.html.twig');
    }
}
