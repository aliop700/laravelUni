<?php

use Illuminate\Database\Seeder;
use App\University;
class MajorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $universities = University::all();
        foreach($universities as $university){
            // $university->majors()->save(factory(App\Major::class,3)->create());
            $university->majors()->create([
                'name'  => 'computer science',
                'hour_cost' => rand(1,100),
                'minimum_average' => rand(700,1000)/10.0
            ]);
            
            $university->majors()->create([
                'name'  => 'medicine',
                'hour_cost' => rand(1,100),
                'minimum_average' => rand(700,1000)/10.0
            ]);
            $university->majors()->create([
                'name'  => 'marketing',
                'hour_cost' => rand(1,100),
                'minimum_average' => rand(700,1000)/10.0
            ]);
        }

        factory(App\Major::class, 6)->create();




        
    }
}
