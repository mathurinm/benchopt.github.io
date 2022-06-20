Search.setIndex({"docnames": ["advanced", "api", "auto_examples/index", "auto_examples/plot_run_benchmark", "auto_examples/plot_run_benchmark_python_R", "auto_examples/sg_execution_times", "cli", "config", "contrib", "generated/benchopt.BaseDataset", "generated/benchopt.BaseObjective", "generated/benchopt.BaseSolver", "generated/benchopt.datasets.simulated.make_correlated_data", "generated/benchopt.plotting.plot_benchmark", "generated/benchopt.run_benchmark", "generated/benchopt.safe_import_context", "generated/benchopt.utils.profile", "how", "index", "publish", "whats_new"], "filenames": ["advanced.rst", "api.rst", "auto_examples/index.rst", "auto_examples/plot_run_benchmark.rst", "auto_examples/plot_run_benchmark_python_R.rst", "auto_examples/sg_execution_times.rst", "cli.rst", "config.rst", "contrib.rst", "generated/benchopt.BaseDataset.rst", "generated/benchopt.BaseObjective.rst", "generated/benchopt.BaseSolver.rst", "generated/benchopt.datasets.simulated.make_correlated_data.rst", "generated/benchopt.plotting.plot_benchmark.rst", "generated/benchopt.run_benchmark.rst", "generated/benchopt.safe_import_context.rst", "generated/benchopt.utils.profile.rst", "how.rst", "index.rst", "publish.rst", "whats_new.rst"], "titles": ["Advanced functionalities in a benchmark", "Python API", "Examples Gallery", "Run benchmark from a script", "Demo benchmark with R/Python", "Computation times", "Command line interface (CLI)", "BenchOpt configuration", "How to contribute", "benchopt.BaseDataset", "benchopt.BaseObjective", "benchopt.BaseSolver", "benchopt.datasets.simulated.make_correlated_data", "benchopt.plotting.plot_benchmark", "benchopt.run_benchmark", "benchopt.safe_import_context", "benchopt.utils.profile", "Write a benchmark", "Benchopt: Benchmark repository for optimization", "Publish benchmark results", "What\u2019s new"], "terms": {"thi": [0, 3, 4, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20], "page": [0, 6, 8, 13, 18, 20], "intend": 0, "list": [0, 1, 3, 4, 6, 7, 13, 14, 15, 17, 18, 20], "make": [0, 7, 8, 12, 18], "easier": 0, "us": [0, 6, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20], "benchopt": [0, 1, 3, 4, 8, 17, 19, 20], "also": [0, 6, 7, 15, 17, 18], "allow": [0, 6, 7, 11, 15, 17, 18, 19, 20], "easili": [0, 6], "parallel": [0, 6, 14, 20], "To": [0, 6, 7, 17, 18], "instal": [0, 8, 15, 20], "necessari": [0, 7, 11, 17], "depend": [0, 6, 7, 18, 20], "pleas": [0, 3, 4], "pip": [0, 8, 17, 18], "Or": 0, "dev": 0, "e": [0, 6, 7, 12, 17, 18], "note": [0, 6, 11, 15, 17, 19], "share": [0, 6, 20], "python": [0, 2, 3, 5, 18], "call": [0, 9, 10, 11, 17, 18, 20], "user": [0, 6, 7, 8, 18, 20], "packag": [0, 6, 15, 17, 18, 20], "space": 0, "system": [0, 6, 7, 17], "one": [0, 6, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20], "option": [0, 7, 17, 18, 20], "can": [0, 3, 4, 6, 7, 8, 10, 11, 15, 16, 17, 18, 19, 20], "pass": [0, 9, 10, 17, 18, 20], "config": [0, 13, 14, 17, 18, 19, 20], "file": [0, 5, 6, 8, 11, 13, 14, 15, 17, 18, 19, 20], "setup": [0, 6, 17], "job": [0, 6, 14, 20], "yaml": [0, 6, 18, 20], "contain": [0, 6, 7, 9, 10, 17, 19], "ani": [0, 8, 11, 17, 18], "kei": [0, 3, 4, 10, 17, 20], "update_paramet": 0, "method": [0, 9, 10, 11, 15, 16, 17, 20], "submitit": [0, 6], "slurmexecutor": 0, "hereaft": 0, "an": [0, 6, 7, 8, 10, 11, 12, 13, 17, 18], "exampl": [0, 3, 4, 6, 18, 19], "slurm_tim": 0, "01": 0, "00": [0, 5], "max": [0, 6, 17, 18], "runtim": [0, 6], "1": [0, 3, 6, 12, 14, 18], "hour": 0, "slurm_gr": 0, "gpu": 0, "requir": [0, 6, 7, 17, 18, 20], "per": [0, 20], "slurm_additional_paramet": 0, "ntask": 0, "number": [0, 6, 11, 12, 14, 17, 18], "task": [0, 12], "cpu": 0, "10": [0, 3, 14, 17, 18], "qo": 0, "qos_nam": 0, "queue": 0, "distribut": 0, "block": 0, "node": 0, "s": [0, 6, 8, 10, 11, 15, 17, 18, 19], "architectur": 0, "account": [0, 8, 18, 19], "acc": 0, "name": [0, 6, 7, 10, 13, 15, 17, 18, 19, 20], "slurm_setup": 0, "sbatch": 0, "script": [0, 2, 4, 5, 17], "command": [0, 7, 11, 17, 18, 19, 20], "ad": [0, 6], "befor": 0, "main": [0, 8, 17, 18], "c": [0, 8, 17, 18], "v100": 0, "16g": 0, "modul": [0, 15], "purg": 0, "load": [0, 11], "cuda": 0, "2": [0, 3, 4, 12, 18], "cudnn": 0, "7": [0, 3], "6": [0, 3, 12, 17], "5": [0, 3, 4, 6, 17, 18], "32": 0, "nccl": 0, "each": [0, 6, 7, 10, 11, 13, 14, 17], "configur": [0, 6, 8, 18, 19, 20], "dataset": [0, 6, 9, 10, 13, 14, 15, 18, 20], "object": [0, 6, 9, 10, 11, 13, 14, 15, 18, 20], "uniqu": 0, "paramet": [0, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20], "ar": [0, 6, 7, 8, 11, 12, 13, 14, 17, 18, 20], "launch": [0, 6, 14], "separ": [0, 6, 10, 14, 15], "arrai": [0, 10, 11, 12, 17], "default": [0, 6, 7, 10, 12, 13, 14, 18, 20], "limit": 0, "simultan": 0, "If": [0, 6, 7, 10, 11, 12, 13, 14, 15, 17, 18], "set": [0, 8, 9, 11, 13, 14, 17, 18, 19, 20], "valu": [0, 6, 7, 10, 11, 17, 19, 20], "timeout": [0, 3, 4, 6, 14], "multipli": 0, "log": [0, 7, 18], "found": [0, 8, 18, 19], "benchopt_run": 0, "As": 0, "we": [0, 8, 18], "reli": 0, "joblib": [0, 20], "memori": 0, "cach": [0, 6, 7, 20], "result": [0, 3, 4, 7, 11, 13, 14, 17, 20], "should": [0, 7, 8, 9, 10, 11, 12, 15, 17, 18, 20], "work": [0, 3, 4, 6, 8, 18], "exactli": 0, "you": [0, 6, 7, 8, 16, 17, 18, 19], "were": [0, 14], "comput": [0, 6, 8, 10, 11, 14, 17, 18, 20], "sequenti": 0, "long": [0, 17], "have": [0, 6, 7, 8, 12, 17, 18], "between": [0, 12, 17], "might": 0, "abl": [0, 10, 15, 17], "all": [0, 2, 6, 8, 14, 15, 17, 18, 20], "present": [0, 18], "typic": [0, 16, 17], "case": [0, 17, 18], "when": [0, 3, 4, 6, 7, 8, 10, 11, 15, 17, 18, 20], "repres": [0, 13, 14], "spars": [0, 12, 20], "data": [0, 7, 9, 10, 11, 12, 14, 17, 18], "too": 0, "larg": 0, "In": [0, 8, 11, 17, 18], "characterist": 0, "order": [0, 7, 10, 18, 20], "defin": [0, 9, 10, 17, 18], "which": [0, 6, 8, 10, 11, 12, 13, 14, 16, 17, 18, 20], "need": [0, 6, 7, 17, 18, 19], "implement": [0, 8, 9, 10, 11, 17, 18, 20], "class": [0, 1, 9, 10, 11, 15, 17], "take": [0, 6, 17, 18], "input": 0, "set_object": [0, 10, 11, 17], "return": [0, 9, 10, 11, 12, 13, 14, 15, 17, 20], "boolean": [0, 7], "evalu": [0, 10, 17], "true": [0, 3, 6, 7, 12, 13, 14, 17, 18], "string": [0, 17], "give": [0, 7, 18], "reason": [0, 10, 11], "why": [0, 10, 11], "displai": [0, 6, 7, 8, 10, 11, 13, 14, 18, 20], "purpos": [0, 10, 11], "For": [0, 6, 7, 8, 11, 17, 18, 20], "instanc": [0, 12, 14], "where": [0, 7, 18], "x": [0, 12, 17, 18], "y": [0, 6, 12, 17, 18], "reg": [0, 4, 17, 18], "get": [0, 7, 11, 14, 16, 17, 18, 19], "basesolv": [0, 17], "def": [0, 17], "self": [0, 11, 17], "from": [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 15, 18, 20], "scipi": 0, "import": [0, 3, 4, 6, 15, 17, 20], "isspars": 0, "doe": [0, 6, 7, 17, 20], "support": [0, 17, 20], "0": [0, 3, 4, 5, 7, 10, 12, 17, 18], "fals": [0, 3, 4, 6, 7, 10, 11, 13, 14, 17, 18], "none": [0, 7, 10, 11, 12, 13, 14, 15, 17], "By": [0, 6, 7, 10, 20], "iter": [0, 11, 17], "variat": 0, "toler": [0, 11, 17], "two": [0, 7, 11, 17], "exponenti": 0, "howev": [0, 6, 17], "growth": 0, "hide": 0, "effect": [0, 6], "adapt": 0, "The": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20], "wai": [0, 8, 17, 18], "specifi": [0, 6, 7, 10, 11, 17, 18, 19, 20], "get_next": 0, "previou": [0, 11, 20], "been": [0, 18], "output": [0, 3, 4, 6, 7, 8, 10, 11, 14, 17, 18, 20], "next": [0, 8, 18], "everi": 0, "would": [0, 7], "situat": [0, 17], "multipl": [0, 6, 10, 14, 17, 20], "access": [0, 6, 7, 10, 17, 19], "same": [0, 6, 7, 14, 15, 17, 18], "structur": [0, 12, 17, 20], "proper": 0, "dynam": [0, 15], "avoid": [0, 6, 15, 17], "issu": [0, 8, 18, 20], "resort": 0, "special": 0, "first": [0, 7, 8, 17, 18], "place": 0, "under": [0, 7, 8, 18], "benchmark_dir": [0, 15, 20], "util": [0, 6, 11, 15, 17, 20], "describ": [0, 7, 8, 17, 18], "here": [0, 1, 3, 4, 17], "my_benchmark": [0, 17], "py": [0, 3, 4, 5, 15, 17], "definit": [0, 17], "helper1": 0, "helper": [0, 17], "helper_modul": 0, "__init__": [0, 15, 17], "submodule1": 0, "Then": [0, 7, 17, 18, 19], "safe_import_context": [0, 17, 20], "import_from": [0, 15, 20], "either": [0, 7, 17], "simpl": [0, 15, 18], "more": [0, 6, 7, 8, 11, 15, 17, 18, 19, 20], "complex": [0, 15], "convent": [0, 15], "regular": [0, 17, 18], "submodul": [0, 15], "import_ctx": [0, 17], "func1": 0, "func2": 0, "function": [1, 6, 8, 9, 10, 11, 16, 17, 18, 20], "avail": [1, 6, 7, 14, 17], "construct": [1, 11, 17, 20], "new": [1, 17, 18, 19], "benchmark": [1, 2, 5, 6, 9, 10, 11, 13, 14, 15, 20], "base": [1, 6, 7, 9, 10, 11, 17], "demo": [2, 5], "r": [2, 5, 6, 18, 20], "run": [2, 4, 5, 7, 8, 11, 14, 16, 17, 19, 20], "download": [2, 3, 4], "sourc": [2, 3, 4, 8, 18], "code": [2, 3, 4, 15, 17, 20], "auto_examples_python": 2, "zip": 2, "jupyt": [2, 3, 4], "notebook": [2, 3, 4], "auto_examples_jupyt": 2, "gener": [2, 3, 4, 7, 8, 12, 13, 17, 18, 19], "sphinx": [2, 3, 4], "click": [3, 4, 6, 8, 18, 19], "full": [3, 4, 10, 14], "out": [3, 4], "simul": [3, 4, 6, 9, 18, 20], "n_featur": [3, 4, 12, 17, 18], "500": 3, "n_sampl": [3, 4, 12, 17, 18], "200": [3, 17, 20], "l2": [3, 18], "logist": [3, 17, 18], "regress": [3, 4, 12, 17, 18], "lmbd": [3, 17], "lightn": 3, "initi": [3, 17], "15": 3, "rep": 3, "3": [3, 12], "16": 3, "21": 3, "25": 3, "4": [3, 17], "28": 3, "8": 3, "35": 3, "43": 3, "50": [3, 12, 17], "9": 3, "61": 3, "11": [3, 17], "12": 3, "13": 3, "14": 3, "done": [3, 4, 8, 18, 20], "sklearn": [3, 17, 18], "liblinear": 3, "22": 3, "66": 3, "newton": 3, "cg": 3, "17": 3, "41": 3, "67": 3, "save": [3, 4, 6, 8, 13, 14, 18], "home": [3, 4, 7], "circleci": [3, 4], "project": [3, 4, 8, 18], "benchmark_logreg_l2": [3, 18, 19], "benchopt_run_2022": [3, 4], "06": [3, 4], "20_13h21m12": 3, "csv": [3, 4, 6, 14], "objective_curv": [3, 4, 6, 7], "plot": [3, 4, 7, 14, 18, 20], "objective_valu": [3, 4, 10, 17, 20], "d1772497002e28b14c604350392ce9f7_objective_value_objective_curv": 3, "pdf": [3, 4], "objective_test": 3, "loss": [3, 18], "d1772497002e28b14c604350392ce9f7_objective_test": 3, "loss_objective_curv": 3, "suboptimality_curv": [3, 4, 6, 7, 13], "d1772497002e28b14c604350392ce9f7_objective_value_suboptimality_curv": 3, "relative_suboptimality_curv": [3, 4, 6, 7], "d1772497002e28b14c604350392ce9f7_objective_value_relative_suboptimality_curv": 3, "bar_chart": [3, 4, 6, 7], "d1772497002e28b14c604350392ce9f7_objective_value_bar_chart": 3, "pathlib": [3, 4, 17], "path": [3, 4, 7, 14, 17], "matplotlib": [3, 4, 13, 14], "pyplot": [3, 4], "plt": [3, 4, 13], "run_benchmark": [3, 4], "plot_benchmark": [3, 4], "plot_kind": [3, 4], "benchmark_path": [3, 4], "resolv": [3, 4, 7], "parent": [3, 4, 18], "try": 3, "save_fil": [3, 4], "dataset_nam": [3, 4, 6, 14], "objective_filt": [3, 4, 6, 14], "max_run": [3, 4, 14], "100": [3, 4, 6, 12, 14, 17], "20": 3, "n_repetit": [3, 4, 14], "plot_result": [3, 4, 14], "show_progress": [3, 4, 14], "except": [3, 6, 17], "runtimeerror": [3, 4], "rais": [3, 4, 7], "onli": [3, 4, 6, 15, 17, 18, 20], "logreg": 3, "clone": [3, 4, 8, 18, 19], "folder": [3, 4, 6, 7, 15, 17, 18, 20], "n": [3, 4, 6, 7, 18, 20], "git": [3, 4, 8, 18, 19, 20], "http": [3, 4, 8, 17, 18, 19], "github": [3, 4, 6, 7, 8, 17, 18, 20], "com": [3, 4, 8, 17, 18, 19], "f": [3, 4, 6, 17], "kind": [3, 4, 6, 7, 13], "fig": [3, 4, 13], "html": [3, 4, 6, 8, 13, 14, 18], "show": [3, 4, 13], "total": [3, 4, 5], "time": [3, 4, 6, 11, 17, 18], "minut": [3, 4], "39": [3, 5], "975": [3, 5], "second": [3, 4, 6, 7, 14, 17], "plot_run_benchmark": [3, 5], "ipynb": [3, 4], "galleri": [3, 4], "5000": 4, "rho": [4, 12, 17], "lasso": [4, 17, 18], "fit_intercept": [4, 17, 18], "pgd": [4, 17, 18], "use_acceler": [4, 17, 18], "benchmark_lasso": [4, 18], "20_13h20m31": 4, "3ebdde1738d5255ff1b6b4a7ea598289_objective_value_objective_curv": 4, "objective_support_s": 4, "3ebdde1738d5255ff1b6b4a7ea598289_objective_support_size_objective_curv": 4, "objective_duality_gap": 4, "3ebdde1738d5255ff1b6b4a7ea598289_objective_duality_gap_objective_curv": 4, "3ebdde1738d5255ff1b6b4a7ea598289_objective_value_suboptimality_curv": 4, "3ebdde1738d5255ff1b6b4a7ea598289_objective_value_relative_suboptimality_curv": 4, "solver": [4, 6, 10, 11, 14, 15, 16, 18, 20], "did": 4, "reach": 4, "precis": [4, 11, 18], "1e": 4, "3ebdde1738d5255ff1b6b4a7ea598289_objective_value_bar_chart": 4, "exist": [4, 6, 7, 17, 18], "905": [4, 5], "plot_run_benchmark_python_r": [4, 5], "02": 5, "40": [5, 19], "880": 5, "execut": 5, "auto_exampl": 5, "mb": 5, "follow": [6, 7, 8, 17, 18, 20], "built": 6, "provid": [6, 10, 13, 15, 17, 20], "tab": 6, "complet": [6, 15, 18], "activ": [6, 7, 17, 18], "shell": [6, 7, 8, 17, 18], "instruct": [6, 8, 18], "given": [6, 10, 11, 13, 14, 17, 18], "document": [6, 20], "bash": [6, 7], "eval": 6, "quot": 6, "_benchopt_complet": 6, "bash_sourc": 6, "come": 6, "some": [6, 15, 17, 18], "addit": 6, "particular": [6, 11], "solver_nam": [6, 14, 20], "param_1": 6, "method_nam": 6, "param_2": 6, "select": [6, 7, 12, 14], "grid": 6, "omit": 6, "advanc": [6, 18], "over": 6, "1000": 6, "arg": 6, "v": [6, 8, 18], "version": [6, 8, 18], "print": [6, 20], "check": [6, 8, 10, 17, 18], "edit": [6, 8, 18], "flag": [6, 18, 20], "develop": [6, 8, 18], "mode": [6, 20], "forc": [6, 14, 18], "reinstal": 6, "minim": [6, 17], "includ": [6, 14, 17, 18, 20], "d": [6, 18], "estim": [6, 10, 14, 17, 18], "config_fil": 6, "whose": [6, 17], "env": [6, 7, 18, 20], "dedic": [6, 17, 18, 20], "conda": [6, 7, 17, 18, 20], "environ": [6, 7, 17, 18], "benchopt_": [6, 20], "env_nam": [6, 20], "creat": [6, 7, 8, 17, 18, 19, 20], "recreat": 6, "start": [6, 8, 17, 18], "fresh": 6, "It": [6, 7, 8, 10, 11, 14, 15, 17, 18], "combin": [6, 17, 18], "q": [6, 18], "quiet": 6, "silenc": 6, "ye": 6, "confirm": 6, "ask": 6, "current": [6, 7, 10, 11, 17, 18], "useless": 6, "argument": [6, 9, 11, 17, 20], "filter": [6, 14, 18], "deprec": 6, "alia": 6, "o": [6, 20], "its": [6, 7, 18], "p": [6, 17, 18, 20], "old": 6, "old_objective_filt": 6, "re": [6, 8, 18], "j": [6, 12, 17, 20], "int": [6, 11, 12, 14], "maxim": [6, 14], "worker": [6, 14], "slurm": [6, 14, 20], "slurm_config": 6, "yml": [6, 18], "cluster": [6, 14, 20], "see": [6, 7, 8, 15, 17, 18, 19, 20], "detail": [6, 7, 8, 15, 17, 18, 20], "descript": 6, "correspond": [6, 10, 17], "point": [6, 10, 11, 20], "accuraci": [6, 11], "curv": [6, 11, 13, 14, 20], "repetit": [6, 14, 18], "averag": 6, "than": [6, 17], "whether": [6, 10, 11], "report": [6, 15, 16, 20], "matplotlibfigur": 6, "pdb": [6, 14, 20], "debugg": [6, 14, 20], "error": [6, 7, 14, 15, 17, 20], "ipdb": 6, "otherwis": [6, 7, 14, 18], "l": [6, 17], "local": [6, 8, 17, 18, 20], "profil": [6, 17, 20], "Will": 6, "do": [6, 8, 18], "decor": [6, 16, 20], "filenam": [6, 14], "store": [6, 7, 10, 11, 14, 17, 19], "anoth": 6, "ha": [6, 18], "happen": 6, "distinguish": 6, "them": [6, 14], "ex": 6, "_1": [6, 18], "benchopt_run_": 6, "timestamp": 6, "your": [6, 8, 17, 18, 19], "own": [6, 7], "must": [6, 10, 17, 20], "featur": [6, 12], "about": [6, 18, 20], "seebenchopt": 6, "io": 6, "how": [6, 7, 17, 19, 20], "parametr": 6, "pytest_arg": 6, "temporari": 6, "produc": 6, "websit": [6, 19], "b": [6, 7], "bench": 6, "k": 6, "pattern": 6, "match": [6, 20], "root": 6, "sub": 6, "directori": [6, 7, 8, 14, 18], "dir": 6, "screen": 6, "previous": [6, 11], "latest": [6, 8, 18, 20], "type": [6, 8, 10, 17, 18], "figur": [6, 13, 14], "str": [6, 7, 10, 11, 13, 14, 15, 17], "png": 6, "plotli": [6, 13, 20], "onc": [6, 10, 11, 16, 17, 18, 19, 20], "t": [6, 17, 18, 19], "token": [6, 7], "repo": [6, 8, 17, 18, 19], "remov": [6, 20], "val": 6, "append": 6, "ones": 6, "inform": [6, 17, 19, 20], "trigger": 6, "verbos": 6, "regexp": 6, "processor": 6, "ram": 6, "etc": [6, 8, 17, 18, 20], "These": 7, "directli": [7, 15, 17, 18], "modifi": [7, 8, 17, 18], "There": 7, "level": [7, 17], "client": 7, "specif": [7, 14, 17, 18], "tweak": 7, "info": [7, 10, 19, 20], "other": [7, 17, 20], "microsoft": 7, "window": 7, "ini": 7, "cli": [7, 17, 18], "similarli": 7, "resolut": 7, "variabl": [7, 17, 20], "benchopt_config": 7, "A": [7, 11, 12, 17, 18, 20], "thei": [7, 17], "usual": 7, "group": 7, "section": [7, 18], "debug": [7, 20], "raise_install_error": 7, "ignor": [7, 17], "github_token": [7, 19], "publish": [7, 18, 20], "benchmark_bench": 7, "default_global_config": 7, "conda_cmd": 7, "data_dir": 7, "enabl": 7, "fail": 7, "via": [7, 17, 18, 20], "instead": [7, 10, 17, 20], "__cache__": 7, "b1": 7, "default_benchmark_config": 7, "valid": 7, "simpli": [7, 15], "item": 7, "line": [7, 11, 16, 17, 18, 19, 20], "indent": 7, "mani": [7, 18], "slow": 7, "even": 7, "graph": 7, "speed": 7, "up": [7, 8, 18], "process": [7, 8, 17, 18], "reliabl": [7, 20], "g": [7, 17, 18], "benchopt_conda_cmd": 7, "track": [8, 17, 18], "feel": [8, 18], "free": [8, 18], "open": [8, 14, 18, 19, 20], "wish": [8, 18], "prefer": [8, 18], "fork": [8, 18], "repositori": [8, 17, 19], "submit": [8, 18], "pull": [8, 18, 19], "pr": [8, 18], "few": [8, 18], "step": [8, 18], "explain": [8, 17, 18, 19], "alreadi": [8, 18], "button": [8, 18], "top": [8, 18], "copi": [8, 17, 18, 19], "guid": [8, 18], "disk": [8, 11, 18], "yourlogin": [8, 18], "cd": [8, 18], "add": [8, 17, 18, 20], "upstream": [8, 18], "remot": [8, 18], "refer": [8, 17, 18], "keep": [8, 18, 19], "synchron": [8, 18], "chang": [8, 17, 18, 20], "origin": [8, 18], "alias": [8, 18], "correctli": [8, 18, 20], "fetch": [8, 18], "push": [8, 18, 20], "now": [8, 18, 19, 20], "properli": [8, 18], "branch": [8, 18], "doc": [8, 18], "switch": [8, 18], "merg": [8, 18, 19], "hold": [8, 18], "my_featur": [8, 18], "alwai": [8, 18, 20], "good": [8, 18], "practic": [8, 18], "never": [8, 18], "control": [8, 17, 18], "commit": [8, 18], "modified_fil": [8, 18], "record": [8, 18], "u": [8, 18], "often": [8, 18], "help": [8, 18, 20], "glad": [8, 18], "accept": [8, 18], "sort": [8, 18], "docstr": [8, 18], "restructuredtext": [8, 18], "like": [8, 18, 19], "tutori": [8, 18], "live": [8, 18], "text": [8, 18], "editor": [8, 18], "firefox": [8, 18], "_build": [8, 18], "index": [8, 18], "deriv": [9, 10, 11], "get_data": [9, 10, 17, 20], "retriev": [9, 10, 11, 18], "dimens": [9, 10, 11, 17], "well": [9, 10], "dictionari": [9, 10, 11, 17, 20], "set_data": [9, 10, 17], "abstract": [9, 10, 11], "feed": 9, "dict": [9, 10, 11, 17, 20], "extra": [9, 10], "instanci": 9, "three": [10, 11, 17], "to_dict": [10, 11, 17], "export": [10, 17], "beta": [10, 17], "np": [10, 12, 17], "size": [10, 17], "float": [10, 11, 12, 14, 17], "least": [10, 17, 18, 20], "associ": 10, "scalar": 10, "detect": 10, "converg": [10, 13, 14], "With": 10, "metric": [10, 14, 17, 20], "runn": 10, "ndarrai": [10, 11, 12], "tupl": [10, 20], "being": [10, 17], "optim": [10, 11, 17, 20], "get_one_solut": [10, 20], "mainli": 10, "test": [10, 14, 17, 18, 20], "shape": [10, 11, 12, 17], "overriden": 10, "differ": [10, 17, 18, 20], "overwritten": 10, "skip": [10, 11, 15, 17, 20], "decid": [10, 11], "compat": [10, 11], "bool": [10, 11, 13, 14], "attribut": [10, 15, 17, 20], "objective_dict": [10, 11, 17], "wrapper": 11, "objective_paramet": 11, "prepar": 11, "problem": [11, 17], "dump": 11, "reduc": 11, "impact": 11, "n_iter": [11, 17], "perform": [11, 14, 15], "after": [11, 19], "oper": [11, 17], "unrel": 11, "procedur": 11, "get_result": [11, 17], "stopping_strategi": [11, 17, 20], "max_it": [11, 17], "increas": 11, "logarithm": 11, "deacreas": 11, "callback": [11, 17, 20], "callabl": 11, "epoch": 11, "period": 11, "stop": [11, 17], "flatten": [11, 17], "coeffici": [11, 12], "stop_val": 11, "subsequ": 11, "relev": [11, 17], "quantiti": [11, 17], "els": [11, 17], "criterion": [11, 20], "sampl": [11, 12, 17, 18], "act": 11, "obtain": [11, 17], "n_task": 12, "snr": 12, "w_true": 12, "densiti": 12, "x_densiti": [12, 20], "random_st": [12, 17], "linear": [12, 17, 18], "decai": 12, "correl": 12, "design": [12, 20], "matrix": 12, "i": [12, 17, 18], "accord": 12, "w": [12, 17, 18], "epsilon": [12, 18], "signal": 12, "nois": [12, 17], "ratio": 12, "frac": [12, 18], "mean": 12, "varianc": 12, "expect": 12, "mathbb": [12, 18], "x_i": [12, 18], "quad": 12, "x_ix_j": 12, "success": 12, "cross": [12, 17], "c_": 12, "inf": 12, "standard": 12, "gaussian": 12, "non": [12, 18], "zero": [12, 17], "entri": 12, "proport": 12, "element": [12, 17], "latter": 12, "randomst": [12, 17], "determin": 12, "random": [12, 17], "determinist": 12, "csc": 12, "toeplitz": 12, "covari": 12, "observ": 12, "vector": [12, 17], "model": 12, "fname": 13, "bar": 13, "chart": 13, "choos": 13, "possibl": [13, 17], "necessarili": 13, "forced_solv": 14, "n_job": 14, "recomput": 14, "maximum": 14, "durat": 14, "progress": [14, 20], "output_nam": 14, "df": 14, "panda": 14, "datafram": 14, "column": [14, 18], "miss": 14, "nan": 14, "context": 15, "manag": [15, 17], "importerror": 15, "moreov": 15, "auto": [15, 20], "costli": 15, "protect": 15, "best": [15, 20], "reus": 15, "explan": 15, "part": 15, "final": 15, "catch": 15, "warn": [15, 17, 20], "module_nam": 15, "obj": 15, "func": 16, "tell": 16, "compos": 17, "respect": 17, "certain": 17, "solver1": 17, "solver2": 17, "actual": 17, "organis": 17, "ordinari": [17, 18], "squar": [17, 18], "ol": [17, 18], "l1": [17, 18], "simplest": 17, "fit": 17, "templat": 17, "through": [17, 18, 20], "monitor": [17, 20], "interest": 17, "along": 17, "without": [17, 18, 20], "constraint": 17, "understood": 17, "train": 17, "inherit": 17, "baseobject": 17, "variou": 17, "05": 17, "_get_lambda_max": 17, "diff": 17, "ab": 17, "sum": 17, "scale": [17, 18], "lambda": [17, 18], "what": [17, 18], "consist": 17, "thing": 17, "keyword": 17, "basedataset": 17, "fetch_openml": 17, "preprocess": 17, "labelbinar": 17, "leukemia": [17, 18], "install_cmd": 17, "scikit": 17, "learn": [17, 18], "unlik": 17, "libsvm": 17, "whole": 17, "72": 17, "just": [17, 18], "return_x_i": 17, "to_numpi": 17, "fit_transform": 17, "astyp": 17, "dtype": 17, "across": 17, "sometim": 17, "want": [17, 18], "variant": 17, "mai": 17, "automat": [17, 18, 19], "numpi": 17, "make_correlated_data": [17, 20], "__name__": 17, "consid": 17, "product": 17, "27": 17, "rng": 17, "_": 17, "dure": 17, "test_paramet": 17, "similar": 17, "abov": 17, "could": 17, "singl": [17, 20], "goal": 17, "so": [17, 18], "stop_valu": 17, "condit": 17, "tol": 17, "altern": 17, "below": [17, 18, 19], "strategi": 17, "integ": 17, "decreas": 17, "posit": 17, "written": [17, 18], "pure": 17, "compil": [17, 18], "proxim": 17, "gradient": 17, "acceler": 17, "step_siz": 17, "solut": 17, "descent": 17, "linalg": 17, "norm": 17, "ord": 17, "mu": 17, "rang": 17, "clip": 17, "impli": 17, "slight": 17, "modif": 17, "compute_lipschitz_cst": 17, "z": [17, 18], "t_new": 17, "while": 17, "t_old": 17, "sqrt": 17, "w_old": 17, "st": 17, "numba": 17, "pypi": [17, 18, 20], "forg": 17, "linear_model": 17, "convergencewarn": 17, "clf": 17, "alpha": 17, "filterwarn": 17, "categori": 17, "coef_": 17, "let": [17, 19], "creation": 17, "interfac": [17, 18, 20], "know": 17, "rpy2": 17, "extens": 17, "robject": 17, "numpy2ri": 17, "r_lang": 17, "import_func_from_r_fil": 17, "r_file": 17, "__file__": 17, "with_suffix": 17, "support_spars": 17, "daubechi": 17, "m": 17, "defris": 17, "de": 17, "mol": 17, "threshold": 17, "algorithm": [17, 18, 20], "invers": 17, "sparsiti": 17, "comm": 17, "appl": 17, "math": 17, "vol": 17, "57": 17, "pp": 17, "1413": 17, "1457": 17, "wilei": 17, "onlin": [17, 19], "librari": 17, "2004": 17, "beck": 17, "teboul": 17, "fast": 17, "shrinkag": 17, "siam": 17, "imag": 17, "sci": 17, "183": 17, "202": 17, "2009": 17, "handl": 17, "r_pgd": 17, "proximal_gradient_desc": 17, "coef": 17, "as_r": 17, "ista": 17, "titl": 17, "author": 17, "thoma": [17, 20], "moreau": [17, 20], "soft": 17, "lambda0": 17, "result0": 17, "appli": 17, "ncol": 17, "numer": 17, "grad": 17, "crossprod": 17, "updat": 17, "crash": 17, "jl": 17, "pyjulia": 17, "juliasolv": 17, "get_jl_interpret": 17, "assert_julia_instal": 17, "julia_solver_fil": 17, "xxx": 17, "intercept": 17, "yet": 17, "solve_lasso": 17, "ravel": 17, "core": 17, "linearalgebra": 17, "map": 17, "sign": 17, "end": [17, 18], "opnorm": 17, "julia_requir": 17, "pkg": 17, "format": 17, "pkgname": 17, "org": [17, 18], "branch_nam": 17, "recov": [17, 18], "both": [17, 18], "url": 17, "target": 17, "binari": [17, 18], "fortran": 17, "comparison": 18, "transpar": 18, "reproduc": 18, "program": 18, "languag": 18, "far": 18, "julia": 18, "termin": 18, "replic": 18, "benchopt_benchmark_logreg_l2": 18, "releas": 18, "And": 18, "tool": 18, "discov": 18, "look": [18, 19], "benchmark_": 18, "illustr": 18, "syntax": [18, 20], "applic": 18, "assum": 18, "everyth": 18, "benchopt_benchmark_lasso": 18, "expos": 18, "insid": 18, "sure": 18, "outsid": 18, "celer": 18, "financ": 18, "explicitli": 18, "repeat": 18, "greater": 18, "togeth": 18, "configuration_file_nam": 18, "preced": 18, "h": 18, "read": [18, 19], "briefli": 18, "form": 18, "notat": 18, "stand": 18, "x_1": 18, "dot": 18, "x_n": 18, "min_w": 18, "xw": 18, "2_2": 18, "neg": 18, "nnl": 18, "min_": 18, "geq": 18, "sum_": 18, "exp": 18, "y_i": 18, "_2": 18, "huber": 18, "sigma": 18, "left": 18, "h_": 18, "x_": 18, "y_": 18, "right": 18, "begin": 18, "quantil": 18, "pb_q": 18, "pinbal": 18, "ica": 18, "linearli": 18, "relat": 18, "unknown": 18, "independ": 18, "permut": 18, "quantifi": 18, "amari": 18, "distanc": 18, "public": 18, "api": 18, "send": 19, "request": [19, 20], "appear": 19, "workflow": 19, "alphanumer": 19, "charact": 19, "identifi": 19, "person": 19, "last": 19, "someth": 19, "1gdgfej73i72if0852a685ejbhb1930ch496cda4": 19, "sensit": 19, "secret": 19, "power": 19, "password": 19, "visit": 19, "tick": 19, "box": 19, "shown": 19, "secur": 19, "locat": 19, "custom": 20, "tom": 20, "dupr\u00e9": 20, "la": 20, "tour": 20, "362": 20, "407": 20, "archiv": 20, "tar": 20, "gz": 20, "supplementari": 20, "materi": 20, "paper": 20, "408": 20, "tag": 20, "sys_info": 20, "get_sys_info": 20, "mathurin": 20, "massia": 20, "421": 20, "ghislain": 20, "durif": 20, "140": 20, "alexandr": 20, "gramfort": 20, "186": 20, "replac": 20, "sufficientdescentcriterion": 20, "sufficientprogresscriterion": 20, "measur": 20, "rel": 20, "attain": 20, "176": 20, "265": 20, "stop_strategi": 20, "harmon": 20, "stopping_criterion": 20, "beno\u00eet": 20, "mal\u00e9zieux": 20, "274": 20, "common": 20, "286": 20, "matric": 20, "289": 20, "345": 20, "281": 20, "325": 20, "criteria": 20, "nidham": 20, "gazagnad": 20, "96": 20, "tangui": 20, "lefort": 20, "joseph": 20, "salmon": 20, "110": 20, "111": 20, "112": 20, "envrion": 20, "bencho_": 20, "128": 20, "autocomplet": 20, "133": 20, "135": 20, "move": 20, "most": 20, "ci": 20, "action": 20, "150": 20, "154": 20, "benchopt_allow_instal": 20, "explicit": 20, "155": 20, "sever": 20, "84": 20, "incompat": 20, "113": 20, "137": 20, "stoppingcriterion": 20, "flexibl": 20, "assess": 20, "cvg": 20, "better": 20, "futur": 20, "151": 20, "83": 20, "86": 20, "94": 20, "clean": 20, "easi": 20, "anymor": 20, "throw": 20, "fix": 20, "lapack": 20, "97": 20, "improv": 20, "nar": 20, "93": 20, "114": 20, "118": 20, "committ": 20, "optimis": 20}, "objects": {"": [[1, 0, 0, "-", "benchopt"]], "benchopt": [[9, 1, 1, "", "BaseDataset"], [10, 1, 1, "", "BaseObjective"], [11, 1, 1, "", "BaseSolver"], [14, 4, 1, "", "run_benchmark"], [15, 1, 1, "", "safe_import_context"], [6, 5, 1, "cmdoption-benchopt-check-editable", "--check-editable"], [6, 5, 1, "cmdoption-benchopt-v", "--version"], [6, 5, 1, "cmdoption-benchopt-v", "-v"]], "benchopt.BaseDataset": [[9, 2, 1, "", "get_data"]], "benchopt.BaseObjective": [[10, 2, 1, "", "compute"], [10, 2, 1, "", "get_one_solution"], [10, 2, 1, "", "set_data"], [10, 2, 1, "", "skip"], [10, 2, 1, "", "to_dict"]], "benchopt.BaseSolver": [[11, 2, 1, "", "get_result"], [11, 2, 1, "", "run"], [11, 2, 1, "", "set_objective"], [11, 2, 1, "", "skip"]], "benchopt.config": [[7, 3, 1, "", "DEFAULT_BENCHMARK_CONFIG"], [7, 3, 1, "", "DEFAULT_GLOBAL_CONFIG"]], "benchopt.datasets.simulated": [[12, 4, 1, "", "make_correlated_data"]], "benchopt.plotting": [[13, 4, 1, "", "plot_benchmark"]], "benchopt.safe_import_context": [[15, 2, 1, "", "import_from"]], "benchopt.utils": [[16, 4, 1, "", "profile"]], "benchopt-archive": [[6, 5, 1, "cmdoption-benchopt-archive-with-outputs", "--with-outputs"], [6, 5, 1, "cmdoption-benchopt-archive-arg-BENCHMARK", "BENCHMARK"]], "benchopt-clean": [[6, 5, 1, "cmdoption-benchopt-clean-f", "--filename"], [6, 5, 1, "cmdoption-benchopt-clean-f", "-f"], [6, 5, 1, "cmdoption-benchopt-clean-arg-BENCHMARK", "BENCHMARK"]], "benchopt-config-get": [[6, 5, 1, "cmdoption-benchopt-config-get-arg-name", "&lt;name&gt;"]], "benchopt-config-set": [[6, 5, 1, "cmdoption-benchopt-config-set-a", "--append"], [6, 5, 1, "cmdoption-benchopt-config-set-a", "-a"], [6, 5, 1, "cmdoption-benchopt-config-set-arg-name", "&lt;name&gt;"], [6, 5, 1, "cmdoption-benchopt-config-set-arg-val", "&lt;val&gt;"]], "benchopt-config": [[6, 5, 1, "cmdoption-benchopt-config-b", "--benchmark"], [6, 5, 1, "cmdoption-benchopt-config-b", "-b"]], "benchopt-generate-results": [[6, 5, 1, "cmdoption-benchopt-generate-results-b", "--benchmark"], [6, 5, 1, "cmdoption-benchopt-generate-results-display", "--display"], [6, 5, 1, "cmdoption-benchopt-generate-results-display", "--no-display"], [6, 5, 1, "cmdoption-benchopt-generate-results-k", "--pattern"], [6, 5, 1, "cmdoption-benchopt-generate-results-root", "--root"], [6, 5, 1, "cmdoption-benchopt-generate-results-b", "-b"], [6, 5, 1, "cmdoption-benchopt-generate-results-k", "-k"]], "benchopt-info": [[6, 5, 1, "cmdoption-benchopt-info-d", "--dataset"], [6, 5, 1, "cmdoption-benchopt-info-e", "--env"], [6, 5, 1, "cmdoption-benchopt-info-env-name", "--env-name"], [6, 5, 1, "cmdoption-benchopt-info-s", "--solver"], [6, 5, 1, "cmdoption-benchopt-info-v", "--verbose"], [6, 5, 1, "cmdoption-benchopt-info-d", "-d"], [6, 5, 1, "cmdoption-benchopt-info-e", "-e"], [6, 5, 1, "cmdoption-benchopt-info-s", "-s"], [6, 5, 1, "cmdoption-benchopt-info-v", "-v"], [6, 5, 1, "cmdoption-benchopt-info-arg-BENCHMARK", "BENCHMARK"]], "benchopt-install": [[6, 5, 1, "cmdoption-benchopt-install-config", "--config"], [6, 5, 1, "cmdoption-benchopt-install-d", "--dataset"], [6, 5, 1, "cmdoption-benchopt-install-e", "--env"], [6, 5, 1, "cmdoption-benchopt-install-env-name", "--env-name"], [6, 5, 1, "cmdoption-benchopt-install-f", "--force"], [6, 5, 1, "cmdoption-benchopt-install-minimal", "--minimal"], [6, 5, 1, "cmdoption-benchopt-install-q", "--quiet"], [6, 5, 1, "cmdoption-benchopt-install-recreate", "--recreate"], [6, 5, 1, "cmdoption-benchopt-install-s", "--solver"], [6, 5, 1, "cmdoption-benchopt-install-y", "--yes"], [6, 5, 1, "cmdoption-benchopt-install-d", "-d"], [6, 5, 1, "cmdoption-benchopt-install-e", "-e"], [6, 5, 1, "cmdoption-benchopt-install-f", "-f"], [6, 5, 1, "cmdoption-benchopt-install-q", "-q"], [6, 5, 1, "cmdoption-benchopt-install-s", "-s"], [6, 5, 1, "cmdoption-benchopt-install-y", "-y"], [6, 5, 1, "cmdoption-benchopt-install-arg-BENCHMARK", "BENCHMARK"]], "benchopt-plot": [[6, 5, 1, "cmdoption-benchopt-plot-all", "--all"], [6, 5, 1, "cmdoption-benchopt-plot-display", "--display"], [6, 5, 1, "cmdoption-benchopt-plot-f", "--filename"], [6, 5, 1, "cmdoption-benchopt-plot-html", "--html"], [6, 5, 1, "cmdoption-benchopt-plot-k", "--kind"], [6, 5, 1, "cmdoption-benchopt-plot-display", "--no-display"], [6, 5, 1, "cmdoption-benchopt-plot-html", "--no-html"], [6, 5, 1, "cmdoption-benchopt-plot-plotly", "--plotly"], [6, 5, 1, "cmdoption-benchopt-plot-f", "-f"], [6, 5, 1, "cmdoption-benchopt-plot-k", "-k"], [6, 5, 1, "cmdoption-benchopt-plot-arg-BENCHMARK", "BENCHMARK"]], "benchopt-publish": [[6, 5, 1, "cmdoption-benchopt-publish-f", "--filename"], [6, 5, 1, "cmdoption-benchopt-publish-t", "--token"], [6, 5, 1, "cmdoption-benchopt-publish-f", "-f"], [6, 5, 1, "cmdoption-benchopt-publish-t", "-t"], [6, 5, 1, "cmdoption-benchopt-publish-arg-BENCHMARK", "BENCHMARK"]], "benchopt-run": [[6, 5, 1, "cmdoption-benchopt-run-config", "--config"], [6, 5, 1, "cmdoption-benchopt-run-d", "--dataset"], [6, 5, 1, "cmdoption-benchopt-run-e", "--env"], [6, 5, 1, "cmdoption-benchopt-run-env-name", "--env-name"], [6, 5, 1, "cmdoption-benchopt-run-f", "--force-solver"], [6, 5, 1, "cmdoption-benchopt-run-html", "--html"], [6, 5, 1, "cmdoption-benchopt-run-l", "--local"], [6, 5, 1, "cmdoption-benchopt-run-n", "--max-runs"], [6, 5, 1, "cmdoption-benchopt-run-j", "--n-jobs"], [6, 5, 1, "cmdoption-benchopt-run-r", "--n-repetitions"], [6, 5, 1, "cmdoption-benchopt-run-html", "--no-html"], [6, 5, 1, "cmdoption-benchopt-run-plot", "--no-plot"], [6, 5, 1, "cmdoption-benchopt-run-o", "--objective"], [6, 5, 1, "cmdoption-benchopt-run-objective-filter", "--objective-filter"], [6, 5, 1, "cmdoption-benchopt-run-p", "--old-objective-filter"], [6, 5, 1, "cmdoption-benchopt-run-output", "--output"], [6, 5, 1, "cmdoption-benchopt-run-pdb", "--pdb"], [6, 5, 1, "cmdoption-benchopt-run-plot", "--plot"], [6, 5, 1, "cmdoption-benchopt-run-profile", "--profile"], [6, 5, 1, "cmdoption-benchopt-run-slurm", "--slurm"], [6, 5, 1, "cmdoption-benchopt-run-s", "--solver"], [6, 5, 1, "cmdoption-benchopt-run-timeout", "--timeout"], [6, 5, 1, "cmdoption-benchopt-run-d", "-d"], [6, 5, 1, "cmdoption-benchopt-run-e", "-e"], [6, 5, 1, "cmdoption-benchopt-run-f", "-f"], [6, 5, 1, "cmdoption-benchopt-run-j", "-j"], [6, 5, 1, "cmdoption-benchopt-run-l", "-l"], [6, 5, 1, "cmdoption-benchopt-run-n", "-n"], [6, 5, 1, "cmdoption-benchopt-run-o", "-o"], [6, 5, 1, "cmdoption-benchopt-run-p", "-p"], [6, 5, 1, "cmdoption-benchopt-run-r", "-r"], [6, 5, 1, "cmdoption-benchopt-run-s", "-s"], [6, 5, 1, "cmdoption-benchopt-run-arg-BENCHMARK", "BENCHMARK"]], "benchopt-test": [[6, 5, 1, "cmdoption-benchopt-test-env-name", "--env-name"], [6, 5, 1, "cmdoption-benchopt-test-arg-BENCHMARK", "BENCHMARK"], [6, 5, 1, "cmdoption-benchopt-test-arg-PYTEST_ARGS", "PYTEST_ARGS"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:data", "4": "py:function", "5": "std:cmdoption"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "data", "Python data"], "4": ["py", "function", "Python function"], "5": ["std", "cmdoption", "program option"]}, "titleterms": {"advanc": 0, "function": 0, "benchmark": [0, 3, 4, 7, 17, 18, 19], "run": [0, 3, 6, 18], "slurm": 0, "cluster": 0, "skip": 0, "solver": [0, 17], "given": 0, "problem": 0, "chang": 0, "strategi": 0, "grow": 0, "stop_val": 0, "reus": 0, "some": 0, "code": [0, 8, 18], "python": [1, 4, 17], "api": [1, 20], "exampl": [2, 17], "galleri": 2, "from": [3, 17], "script": 3, "demo": 4, "r": [4, 17], "comput": 5, "time": 5, "command": 6, "line": 6, "interfac": 6, "cli": [6, 20], "option": 6, "paramet": 6, "syntax": 6, "benchopt": [6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 18], "main": 6, "instal": [6, 7, 17, 18], "test": 6, "process": 6, "result": [6, 18, 19], "gener": 6, "plot": [6, 13], "publish": [6, 19], "helper": 6, "archiv": 6, "clean": 6, "config": [6, 7], "get": 6, "set": [6, 7], "info": 6, "sy": 6, "configur": 7, "file": 7, "locat": 7, "structur": 7, "global": 7, "us": [7, 17], "mamba": 7, "packag": 7, "how": [8, 18], "contribut": [8, 18], "bug": [8, 18, 20], "report": [8, 18], "featur": [8, 18], "request": [8, 18], "document": [8, 18], "basedataset": 9, "baseobject": 10, "basesolv": 11, "dataset": [12, 17], "simul": [12, 17], "make_correlated_data": 12, "plot_benchmark": 13, "run_benchmark": 14, "safe_import_context": 15, "util": 16, "profil": 16, "write": [17, 18], "1": [17, 20], "object": 17, "2": [17, 20], "real": 17, "parametr": 17, "3": [17, 20], "julia": 17, "depend": 17, "sourc": 17, "repositori": 18, "optim": 18, "avail": 18, "websit": 18, "content": 18, "obtain": 19, "github": 19, "token": 19, "what": 20, "s": 20, "new": 20, "version": 20, "develop": 20, "06": 20, "05": 20, "2022": 20, "changelog": 20, "22": 20, "04": 20, "2021": 20, "doc": 20, "0": 20, "2020": 20, "09": 20, "25": 20, "releas": 20, "highlight": 20}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})