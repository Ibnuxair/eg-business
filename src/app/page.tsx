import { supabase } from "@/utils/supabase/client";

export default function Home() {
  const createFarmer = async () => {
    const { data, error} = await supabase
      .from("farmers")
      .insert({
        name: 'Ibrahim Uzairu',
        email: 'ibrahimuzairu28@gmail.com',
        location: 'Katsina',
        phone_number: '08034566343',
        image_url: 'hdkjkdhhgahdhdjj'
      }
      );

      if (data) {
        console.log('Farmer created:', data);
      }
      if (error) {
        console.error('Error:', error);
      }  
  };

  createFarmer();

  return (

    <div>Logged in</div>
  );
}
