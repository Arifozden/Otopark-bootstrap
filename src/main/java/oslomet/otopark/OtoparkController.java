package oslomet.otopark;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OtoparkController {
    private final List<Otopark> tumMusteriler =new ArrayList<>();

@PostMapping("/kayit")
    public void musteriKayit(Otopark yazMusteri){
    tumMusteriler.add(yazMusteri);
}

@GetMapping("/hepsiniGetir")
    public List<Otopark> hepsiniGetir(){
    return tumMusteriler;
}

@GetMapping("/hepsiniSil")
    public void hepsiniSil(){
    tumMusteriler.clear();
}

}
