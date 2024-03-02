import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useEffect, useReducer } from 'react';

import TableForm from './TableForm';



const reducer=(state,action)=>{
  switch(action.type){
    case 'changeid': return {...state , id: action.newid}
    case 'selectformation':return {...state,formation:action.formation}
    case 'changegenre':return {...state,genre:action.genre}
    case 'changedate':return {...state,dateN:action.dateN}
    case 'selectnationalite':return {...state,nationalite:action.nationalite}
    case 'changeetat':return {...state,etat:action.etat}
    case 'enfants':return {...state,enfants:action.enfants}
    case 'setskills': switch(action.skill.name){
        case 'IE' : return {...state,skills:{...state.skills,ie:action.skill.deg}}
        case 'CI' : return {...state,skills:{...state.skills,ci:action.skill.deg}}
        case 'SRP' : return {...state,skills:{...state.skills,srp:action.skill.deg}}
        case 'VD' : return {...state,skills:{...state.skills,vd:action.skill.deg}}
        case 'AO' : return {...state,skills:{...state.skills,ao:action.skill.deg}}
        case 'CD' : return {...state,skills:{...state.skills,cd:action.skill.deg}}
       default : return state

      }
    case 'certificat': return {...state,certificat:action.crt}
    case 'setlangs': switch(action.lang.name){
      case 'AR' : return {...state,langues:{...state.langues,ar:action.lang.deg}}
      case 'chinois' : return {...state,langues:{...state.langues,chinois:action.lang.deg}}
      case 'en' : return {...state,langues:{...state.langues,en:action.lang.deg}}
      case 'fr' : return {...state,langues:{...state.langues,fr:action.lang.deg}}
      case 'italien' : return {...state,langues:{...state.langues,italien:action.lang.deg}}
      case 'allemand' : return {...state,langues:{...state.langues,allemand:action.lang.deg}}
     default : return state

    }
    case 'setofficeit': switch(action.office.name){
      case 'word' : return {...state,officeit:{...state.officeit,word:action.office.deg}}
      case 'excel' : return {...state,officeit:{...state.officeit,excel:action.office.deg}}
      case 'powerpoint' : return {...state,officeit:{...state.officeit,powerpoint:action.office.deg}}
      case 'outlook' : return {...state,officeit:{...state.officeit,outlook:action.office.deg}}
      case 'access' : return {...state,officeit:{...state.officeit,access:action.office.deg}}
     default : return state}
    case 'rating' : return {...state,rating:action.rating}

    default : return state
  }

}



const initialstate={
  id:Math.random()*10,
  name:'default',
  formation:[],
  genre:'',
  dateN:'',
  nationalite:'',
  etat:'',
  enfants:'',
  skills:{
    ie:'',
    ci:'',
    srp:'',
    vd:'',
    ao:'',
    cd:''
  },certificat:'',
  langues:{
    ar:'',
    chinois:'',
    en:'',
    fr:'',
    italien:'',
    japonais:'',
    portugais:'',
    rusee:'',
    espagnol:'',
    turc:'',
    allemand:''
  },
  officeit:{
        word:'',
        excel:'',
        powerpoint:'',
        outlook:'',
        access:'',
  },
  rating:0

}


export default function Form() {
  const [state,dispatch]=useReducer(reducer,initialstate)

 function handleformationchange(e){
  let listofchecked=[...state.formation]
  const index = listofchecked.indexOf(e.target.value);
   
  if(e.target.checked){ 
    if(index === -1){
       listofchecked.push(e.target.value)   
    }
}
else{
    listofchecked.splice(index, 1);
}
  dispatch({type:'selectformation',formation:listofchecked})

 }

 const handleDateChange = (date) => { 
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const locale = 'fr-FR'; 
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formattedDate = formatter.format(new Date(date));
  dispatch({type:"changedate",dateN:formattedDate})
};

useEffect(()=>{
console.log(state)
},[state])


  return (
    <>
      <Typography variant="h5" gutterBottom>
      Données personnelles
      </Typography>
      <Grid container spacing={3}>
     
        <Grid item xs={12}>
        <Typography>
           Veuillez saisir votre ID comme suit : "NOM (lettres majuscules)-Date de naissance (JJMMAA)" par exemple : NOM-011286
        </Typography>
          <TextField
            required
            id="id"
            name="id"
            label="ID"
            fullWidth
            variant="standard"
            onChange={(e)=>{dispatch({type:'changeid',newid:e.target.value})}}
          />
        </Grid>

        <Grid item xs={12}>
        <Typography>
          Postuler à un poste professionnel en tant que ...
        </Typography>
          <FormControlLabel
            control={<Checkbox onChange={handleformationchange} color="secondary" name="doctorat" value="doctorat" />}
            label="Doctorat"
          />
           <FormControlLabel
            control={<Checkbox onChange={handleformationchange} color="secondary" name="Professionnel" value="Professionnel" />}
            label="Professionnel"
          />
           <FormControlLabel
            control={<Checkbox onChange={handleformationchange} color="secondary" name="Formation Professionelle" value="Formation Professionelle" />}
            label="Formation Professionelle"
          />
        </Grid>


        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Genre"
            value={state.genre}
            onChange={(e)=>dispatch({type:'changegenre',genre:e.target.value})}
        >
            <MenuItem value='M'>Masuclin</MenuItem>
            <MenuItem value='F'>Femelle</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} >
        <Typography>
         Date Naissance
        </Typography>
             <DatePicker onChange={handleDateChange} />
        </Grid>
       
        <Grid item xs={12}>
        <Typography>
            Nationalité
        </Typography>
          <TextField
            required
            id="nat"
            name="nat"
            label="Nationalité*"
            fullWidth
            variant="standard"
            onChange={(e)=>{dispatch({type:'selectnationalite',nationalite:e.target.value})}}
          />
        </Grid>
  
        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">État civil*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="État civil*"
            value={state.etat}
            onChange={(e)=>dispatch({type:'changeetat',etat:e.target.value})}
        >
            <MenuItem value='Marié'>Marié</MenuItem>
            <MenuItem value='Célibataire'>Célibataire</MenuItem>
            <MenuItem value='Autre'>Autre</MenuItem>
        </Select>
        </FormControl>
        {(state.etat !== "Marié" && state.etat !== "Célibataire" &&  state.etat !== "") ?     <TextField
            required
            id="etat"
            name="etat"
            label="Etat*"
            fullWidth
            variant="standard"
            onChange={(e)=>dispatch({type:'changeetat',etat:e.target.value})
          }
          />:null}
        </Grid>


        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enfants*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Enfants*"
            value={state.enfants}
            onChange={(e)=>dispatch({type:'enfants',enfants:e.target.value})}
        >
            <MenuItem value='Oui'>Oui</MenuItem>
            <MenuItem value='Non'>Non</MenuItem>
        </Select>
        </FormControl>
         </Grid>




      </Grid>

      <TableForm langues={state.langues} officeit={state.officeit} skills={state.skills} dispatch={dispatch} />  

      <Rating
        name="simple-controlled"
        value={state?.rating}
        onChange={(event, newValue) => {
          dispatch({type:'rating',rating:newValue})
        }}
      />
      <Button  variant="contained" >Send</Button>  
    </>
  );
}

